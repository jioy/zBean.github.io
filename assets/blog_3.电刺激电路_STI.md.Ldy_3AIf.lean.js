import { _ as _export_sfc, C as resolveComponent, o as openBlock, c as createElementBlock, j as createBaseVNode, a as createTextVNode, E as createVNode, a2 as createStaticVNode } from "./chunks/framework.--Htgknp.js";
const _imports_0 = "/zBean.github.io/assets/image.Cty0LyPK.png";
const _imports_1 = "/zBean.github.io/assets/image-1.gZUo3NP_.png";
const _imports_2 = "/zBean.github.io/assets/image-2.BGWokf-K.png";
const _imports_3 = "/zBean.github.io/assets/image-3.BdBziYv1.png";
const _imports_4 = "/zBean.github.io/assets/image-4.C0fQjRLV.png";
const _imports_5 = "/zBean.github.io/assets/image-5.aAR5XkU_.png";
const _imports_6 = "/zBean.github.io/assets/image-6.BH0dHLgS.png";
const _imports_7 = "/zBean.github.io/assets/image-7.CsDW-cVi.png";
const _imports_8 = "/zBean.github.io/assets/image-8.CCF2D8KN.png";
const _imports_9 = "/zBean.github.io/assets/image-9.wRnh5RDp.png";
const _imports_10 = "/zBean.github.io/assets/image-10.Bj5zwITX.png";
const _imports_11 = "/zBean.github.io/assets/image-11.CtbcrxIn.png";
const _imports_12 = "/zBean.github.io/assets/image-12.fqWwxfP0.png";
const _imports_13 = "/zBean.github.io/assets/image-13.C1qteWGT.png";
const _imports_14 = "/zBean.github.io/assets/image-14.zjOpveuj.png";
const _imports_15 = "/zBean.github.io/assets/image-15.BuefMT8D.png";
const _imports_16 = "/zBean.github.io/assets/image-16.D3GZiSzo.png";
const _imports_17 = "/zBean.github.io/assets/image-17.4ciRbKIr.png";
const __pageData = JSON.parse('{"title":"基于电刺激的触觉反馈系统设计","description":"记录电刺激触觉反馈系统的设计与实现，包括高压生成、电流控制、电极切换、单片机编程和手机蓝牙通信，并展示触觉反馈实验。","frontmatter":{"title":"基于电刺激的触觉反馈系统设计","description":"记录电刺激触觉反馈系统的设计与实现，包括高压生成、电流控制、电极切换、单片机编程和手机蓝牙通信，并展示触觉反馈实验。","lang":"zh-CN","article":true,"date":"2024-10-17","dateApproximate":true,"tags":["触觉反馈","电刺激","嵌入式系统","蓝牙","硬件设计"],"image":"/social/stimulation.png","imageAlt":"电刺激触觉反馈系统整体框图","updatedISO":"2026-10-17T10:50:13.682Z","publishedISO":"2024-10-17","head":[["link",{"rel":"canonical","href":"https://jioy.github.io/zBean.github.io/blog/3.%E7%94%B5%E5%88%BA%E6%BF%80%E7%94%B5%E8%B7%AF/STI.html"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:site_name","content":"Zhibin Li"}],["meta",{"property":"og:title","content":"基于电刺激的触觉反馈系统设计 | Zhibin Li"}],["meta",{"property":"og:description","content":"记录电刺激触觉反馈系统的设计与实现，包括高压生成、电流控制、电极切换、单片机编程和手机蓝牙通信，并展示触觉反馈实验。"}],["meta",{"property":"og:url","content":"https://jioy.github.io/zBean.github.io/blog/3.%E7%94%B5%E5%88%BA%E6%BF%80%E7%94%B5%E8%B7%AF/STI.html"}],["meta",{"property":"og:image","content":"https://jioy.github.io/zBean.github.io/social/stimulation.png"}],["meta",{"property":"og:image:alt","content":"电刺激触觉反馈系统整体框图"}],["meta",{"property":"og:locale","content":"zh_CN"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:title","content":"基于电刺激的触觉反馈系统设计 | Zhibin Li"}],["meta",{"name":"twitter:description","content":"记录电刺激触觉反馈系统的设计与实现，包括高压生成、电流控制、电极切换、单片机编程和手机蓝牙通信，并展示触觉反馈实验。"}],["meta",{"name":"twitter:image","content":"https://jioy.github.io/zBean.github.io/social/stimulation.png"}],["meta",{"name":"twitter:image:alt","content":"电刺激触觉反馈系统整体框图"}],["meta",{"property":"article:modified_time","content":"2026-10-17T10:50:13.682Z"}],["meta",{"property":"article:author","content":"https://jioy.github.io/zBean.github.io/"}],["meta",{"property":"article:published_time","content":"2024-10-17"}],["meta",{"property":"article:tag","content":"触觉反馈"}],["meta",{"property":"article:tag","content":"电刺激"}],["meta",{"property":"article:tag","content":"嵌入式系统"}],["meta",{"property":"article:tag","content":"蓝牙"}],["meta",{"property":"article:tag","content":"硬件设计"}],["script",{"type":"application/ld+json","id":"page-schema"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"BlogPosting\\",\\"@id\\":\\"https://jioy.github.io/zBean.github.io/blog/3.%E7%94%B5%E5%88%BA%E6%BF%80%E7%94%B5%E8%B7%AF/STI.html#article\\",\\"url\\":\\"https://jioy.github.io/zBean.github.io/blog/3.%E7%94%B5%E5%88%BA%E6%BF%80%E7%94%B5%E8%B7%AF/STI.html\\",\\"mainEntityOfPage\\":\\"https://jioy.github.io/zBean.github.io/blog/3.%E7%94%B5%E5%88%BA%E6%BF%80%E7%94%B5%E8%B7%AF/STI.html\\",\\"headline\\":\\"基于电刺激的触觉反馈系统设计\\",\\"description\\":\\"记录电刺激触觉反馈系统的设计与实现，包括高压生成、电流控制、电极切换、单片机编程和手机蓝牙通信，并展示触觉反馈实验。\\",\\"image\\":\\"https://jioy.github.io/zBean.github.io/social/stimulation.png\\",\\"inLanguage\\":\\"zh-CN\\",\\"dateModified\\":\\"2026-10-17T10:50:13.682Z\\",\\"datePublished\\":\\"2024-10-17\\",\\"keywords\\":[\\"触觉反馈\\",\\"电刺激\\",\\"嵌入式系统\\",\\"蓝牙\\",\\"硬件设计\\"],\\"author\\":{\\"@type\\":\\"Person\\",\\"@id\\":\\"https://jioy.github.io/zBean.github.io/#person\\",\\"name\\":\\"Zhibin Li\\",\\"alternateName\\":\\"李志斌\\",\\"url\\":\\"https://jioy.github.io/zBean.github.io/\\",\\"image\\":\\"https://jioy.github.io/zBean.github.io/profile6.png\\",\\"affiliation\\":{\\"@type\\":\\"CollegeOrUniversity\\",\\"name\\":\\"Southern University of Science and Technology\\",\\"url\\":\\"https://www.sustech.edu.cn/en/\\"},\\"sameAs\\":[\\"https://github.com/jioy\\",\\"https://scholar.google.com/citations?user=Q_M985YAAAAJ\\",\\"https://space.bilibili.com/205887712\\"]}}"]]},"headers":[],"relativePath":"blog/3.电刺激电路/STI.md","filePath":"blog/3.电刺激电路/STI.md","lastUpdated":1792234213682.0488}');
const _sfc_main = { name: "blog/3.电刺激电路/STI.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ArticleMeta = resolveComponent("ArticleMeta");
  return openBlock(), createElementBlock("div", null, [
    _cache[0] || (_cache[0] = createBaseVNode("h1", {
      id: "基于电刺激的触觉反馈系统设计",
      tabindex: "-1"
    }, [
      createTextVNode("基于电刺激的触觉反馈系统设计 "),
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#基于电刺激的触觉反馈系统设计",
        "aria-label": 'Permalink to "基于电刺激的触觉反馈系统设计"'
      }, "​")
    ], -1)),
    createVNode(_component_ArticleMeta),
    _cache[1] || (_cache[1] = createStaticVNode("", 54))
  ]);
}
const STI = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  STI as default
};
