import { c as create_ssr_component, a as add_attribute, e as escape, b as validate_component } from "../../chunks/ssr.js";
const HeaderRoute = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { href } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  return `<a${add_attribute("href", href, 0)} class="text-sm w-20 inline-flex justify-center items-center h-full">${escape(title)}</a>`;
});
const RouteBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="h-full flex flex-col mx-2"><div class="grow">${validate_component(HeaderRoute, "HeaderRoute").$$render($$result, { href: "/", title: "Home" }, {}, {})} ${validate_component(HeaderRoute, "HeaderRoute").$$render($$result, { href: "/tutorials", title: "Tutorials" }, {}, {})} ${validate_component(HeaderRoute, "HeaderRoute").$$render($$result, { href: "/blogs", title: "Blogs" }, {}, {})} ${validate_component(HeaderRoute, "HeaderRoute").$$render(
    $$result,
    {
      href: "/discussions",
      title: "Discussions"
    },
    {},
    {}
  )}</div></section>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1arfpk6_START --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin=""><link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;500;700&display=swap" rel="stylesheet"><!-- HEAD_svelte-1arfpk6_END -->`, ""} <header class="w-screen h-16 bg-slate-800 text-slate-200 flex items-center px-3"><a href="/" rel="nofollow" class="text-2xl mx-3" data-svelte-h="svelte-1fwokhd">Polar Post</a> ${validate_component(RouteBar, "RouteBar").$$render($$result, {}, {}, {})}</header> ${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
