"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const path_1 = __importDefault(require("path"));
const pluginHooks_1 = require("./pluginHooks");
const WebpackFormatter_1 = require("../formatter/WebpackFormatter");
const IssueWebpackError_1 = require("../issue/IssueWebpackError");
const isPending_1 = __importDefault(require("../utils/async/isPending"));
const wait_1 = __importDefault(require("../utils/async/wait"));
function tapDoneToAsyncGetIssues(compiler, configuration, state) {
    const hooks = pluginHooks_1.getForkTsCheckerWebpackPluginHooks(compiler);
    compiler.hooks.done.tap('ForkTsCheckerWebpackPlugin', (stats) => __awaiter(this, void 0, void 0, function* () {
        if (stats.compilation.compiler !== compiler) {
            // run only for the compiler that the plugin was registered for
            return;
        }
        const report = state.report;
        let issues;
        try {
            if (yield isPending_1.default(report)) {
                hooks.waiting.call(stats.compilation);
                configuration.logger.issues.log(chalk_1.default.blue('Issues checking in progress...'));
            }
            else {
                // wait 10ms to log issues after webpack stats
                yield wait_1.default(10);
            }
            issues = yield report;
        }
        catch (error) {
            hooks.error.call(error, stats.compilation);
            return;
        }
        if (!issues) {
            // some error has been thrown or it was canceled
            return;
        }
        if (report !== state.report) {
            // there is a newer report - ignore this one
            return;
        }
        if (configuration.issue.scope === 'webpack') {
            // exclude issues that are related to files outside webpack compilation
            issues = issues.filter((issue) => !issue.file || stats.compilation.fileDependencies.has(path_1.default.normalize(issue.file)));
        }
        // filter list of issues by provided issue predicate
        issues = issues.filter(configuration.issue.predicate);
        // modify list of issues in the plugin hooks
        issues = hooks.issues.call(issues, stats.compilation);
        const formatter = WebpackFormatter_1.createWebpackFormatter(configuration.formatter);
        if (issues.length) {
            // follow webpack's approach - one process.write to stderr with all errors and warnings
            configuration.logger.issues.error(issues.map((issue) => formatter(issue)).join('\n'));
        }
        else {
            configuration.logger.issues.log(chalk_1.default.green('No issues found.'));
        }
        if (state.webpackDevServerDoneTap) {
            issues.forEach((issue) => {
                const error = new IssueWebpackError_1.IssueWebpackError(configuration.formatter(issue), compiler.options.context || process.cwd(), issue);
                if (issue.severity === 'warning') {
                    stats.compilation.warnings.push(error);
                }
                else {
                    stats.compilation.errors.push(error);
                }
            });
            state.webpackDevServerDoneTap.fn(stats);
        }
        if (stats.startTime) {
            configuration.logger.infrastructure.info(`Time: ${Math.round(Date.now() - stats.startTime).toString()} ms`);
        }
    }));
}
exports.tapDoneToAsyncGetIssues = tapDoneToAsyncGetIssues;
