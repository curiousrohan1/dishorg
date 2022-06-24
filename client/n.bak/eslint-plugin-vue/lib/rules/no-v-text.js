/**
 * @author tyankatsu <https://github.com/tyankatsu0105>
 * See LICENSE file in root directory for full license.
 */
'use strict'
const utils = require('../utils')

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = {
  meta: {
    type: 'suggestion',
    docs: {
      description: 'disallow use of v-text',
      categories: undefined,
      url: 'https://eslint.vuejs.org/rules/no-v-text.html'
    },
    fixable: null,
    schema: []
  },
  /** @param {RuleContext} context */
  create(context) {
    return utils.defineTemplateBodyVisitor(context, {
      /** @param {VDirective} node */
      "VAttribute[directive=true][key.name.name='text']"(node) {
        context.report({
          node,
          loc: node.loc,
          message: "Don't use 'v-text'."
        })
      }
    })
  }
}
