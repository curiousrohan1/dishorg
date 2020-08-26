(function r(t) {
  let n = {};
  if (t.hasOwnProperty('__VUE_DEVTOOLS_GLOBAL_HOOK__')) {
    return;
  }
  const r = {
    Vue: null, _buffer: [], _replayBuffer(e) { const t = this._buffer; this._buffer = []; for (let n = 0, r = t.length; n < r; n++) { const r = t[n]; r[0] === e ? this.emit.apply(this, r) : this._buffer.push(r); } }, on(e, t) { const r = `$${e}`; n[r] ? n[r].push(t) : (n[r] = [t], this._replayBuffer(e)); }, once(e, t) { function n() { this.off(e, n), t.apply(this, arguments); } this.on(e, n); }, off(e, t) { if (e = `$${e}`, arguments.length) { const r = n[e]; if (r) if (t) for (let e = 0, n = r.length; e < n; e++) { const n = r[e]; if (n === t || n.fn === t) { r.splice(e, 1); break; } } else n[e] = null; } else n = {}; }, emit(e) { const t = `$${e}`; let r = n[t]; if (r) { const e = [].slice.call(arguments, 1); r = r.slice(); for (let t = 0, n = r.length; t < n; t++)r[t].apply(this, e); } else { const e = [].slice.call(arguments); this._buffer.push(e); } },
  };
  r.once('init', (e) => {
    r.Vue = e, e.prototype.$inspect = function () {
      const e = t.__VUE_DEVTOOLS_INSPECT__; e && e(this);
    };
  }),
  r.once('vuex:init', (e) => {
    r.store = e, r.initialState = w(e.state);
    const t = e.replaceState.bind(e);
    let n;
    let o;
    e.replaceState = ((e) => {
      r.initialState = w(e), t(e);
    }),
    e.registerModule && (
      r.storeModules = [],
      n = e.registerModule.bind(e),
      e.registerModule = ((e, t, o) => {
        typeof e === 'string' && (e = [e]),
        r.storeModules.push({ path: e, module: t, options: o }),
        n(e, t, o);
      }),
      o = e.unregisterModule.bind(e),
      e.unregisterModule = ((e) => {
        typeof e === 'string' && (e = [e]);
        const t = e.join('/');
        const n = r.storeModules.findIndex((e) => e.path.join('/') === t);
        n !== -1 && r.storeModules.splice(n, 1), o(e);
      })
    ),
    r.flushStoreModules = (() => (e.replaceState = t, e.registerModule && (e.registerModule = n, e.unregisterModule = o), r.storeModules || []));
  }), Object.defineProperty(t, '__VUE_DEVTOOLS_GLOBAL_HOOK__', { get() { return r; } }); const { toString: o } = Function.prototype; const {
    create: i, defineProperty: f, getOwnPropertyDescriptor: u, getOwnPropertyNames: c, getOwnPropertySymbols: s, getPrototypeOf: l,
  } = Object; const { hasOwnProperty: a, propertyIsEnumerable: d } = Object.prototype; const p = { SYMBOL_PROPERTIES: typeof s === 'function', WEAKSET: typeof WeakSet === 'function' }; const y = () => { if (p.WEAKSET) return new WeakSet(); const e = i({ add: (t) => e._values.push(t), has: (t) => !!~e._values.indexOf(t) }); return e._values = [], e; }; const h = (e, t) => { if (!e.constructor) return i(null); const n = e.__proto__ || l(e); if (e.constructor === t.Object) return n === t.Object.prototype ? {} : i(n); if (~o.call(e.constructor).indexOf('[native code]')) try { return new e.constructor(); } catch (e) {} return i(n); }; const g = (e, t, n, r) => { const o = h(e, t); for (const i in e)a.call(e, i) && (o[i] = n(e[i], r)); if (p.SYMBOL_PROPERTIES) { const t = s(e); if (t.length) for (let i, f = 0; f < t.length; f++)i = t[f], d.call(e, i) && (o[i] = n(e[i], r)); } return o; }; const O = (e, t, n, r) => { const o = h(e, t); const i = p.SYMBOL_PROPERTIES ? [].concat(c(e), s(e)) : c(e); if (i.length) for (let c, s, l = 0; l < i.length; l++)c = i[l], c !== 'callee' && c !== 'caller' && (s = u(e, c), s.value = n(e[c], r), f(o, c, s)); return o; }; const _ = (e) => { let t = ''; return e.global && (t += 'g'), e.ignoreCase && (t += 'i'), e.multiline && (t += 'm'), e.unicode && (t += 'u'), e.sticky && (t += 'y'), t; }; const { isArray: b } = Array; const m = (() => (typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof e !== 'undefined' ? e : void (console && console.error && console.error('Unable to locate global object, returning "this".'))))(); function w(e, t) { const n = !(!t || !t.isStrict); const r = t && t.realm || m; const o = n ? O : g; const i = (e, t) => { if (!e || typeof e !== 'object' || t.has(e)) return e; if (e instanceof HTMLElement) return e.cloneNode(!1); const f = e.constructor; if (f === r.Object) return t.add(e), o(e, r, i, t); let u; if (b(e)) { if (t.add(e), n) return O(e, r, i, t); u = new f(); for (let n = 0; n < e.length; n++)u[n] = i(e[n], t); return u; } if (e instanceof r.Date) return new f(e.getTime()); if (e instanceof r.RegExp) return u = new f(e.source, e.flags || _(e)), u.lastIndex = e.lastIndex, u; if (r.Map && e instanceof r.Map) return t.add(e), u = new f(), e.forEach((e, n) => { u.set(n, i(e, t)); }), u; if (r.Set && e instanceof r.Set) return t.add(e), u = new f(), e.forEach((e) => { u.add(i(e, t)); }), u; if (r.Buffer && r.Buffer.isBuffer(e)) return u = r.Buffer.allocUnsafe ? r.Buffer.allocUnsafe(e.length) : new f(e.length), e.copy(u), u; if (r.ArrayBuffer) { if (r.ArrayBuffer.isView(e)) return new f(e.buffer.slice(0)); if (e instanceof r.ArrayBuffer) return e.slice(0); } return a.call(e, 'then') && typeof e.then === 'function' || e instanceof Error || r.WeakMap && e instanceof r.WeakMap || r.WeakSet && e instanceof r.WeakSet ? e : (t.add(e), o(e, r, i, t)); }; return i(e, y()); }
}(window));
