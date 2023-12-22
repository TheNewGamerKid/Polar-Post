import { c as create_ssr_component, a as add_attribute, b as validate_component } from "../../chunks/ssr.js";
const BlogHero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { src } = $$props;
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  return `<div class="w-full aspect-square p-2 relative brightness-50 transition-all border-2 border-slate-900 rounded-lg hover:brightness-90"><div class="z-10 relative w-full h-full"><h1 class="text-lg" data-svelte-h="svelte-wgcp1v">Lorem Ipsum</h1></div> <img class="absolute top-0 left-0 w-full h-full object-cover blur-xs opacity-45 z-0" alt="Hero Img"${add_attribute("src", src, 0)}></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let columns = "grid-cols-1";
  return `<main><section class="p-5"><h2 class="text-2xl w-full flex justify-center pb-5" data-svelte-h="svelte-b14cbl">Top Blogs</h2> <div${add_attribute("class", `grid ${columns} gap-2`, 0)}>${validate_component(BlogHero, "BlogHero").$$render($$result, { src: "/test-hero.jpg" }, {}, {})} ${validate_component(BlogHero, "BlogHero").$$render($$result, { src: "/test-hero.jpg" }, {}, {})} ${validate_component(BlogHero, "BlogHero").$$render($$result, { src: "/test-hero.jpg" }, {}, {})} ${validate_component(BlogHero, "BlogHero").$$render($$result, { src: "/test-hero.jpg" }, {}, {})}</div></section></main>`;
});
export {
  Page as default
};
