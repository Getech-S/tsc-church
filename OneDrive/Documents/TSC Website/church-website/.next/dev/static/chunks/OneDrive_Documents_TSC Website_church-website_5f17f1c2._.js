(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/OneDrive/Documents/TSC Website/church-website/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/TSC Website/church-website/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/TSC Website/church-website/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Documents/TSC Website/church-website/components/layout/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Navbar",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/TSC Website/church-website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/TSC Website/church-website/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/TSC Website/church-website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/TSC Website/church-website/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/TSC Website/church-website/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/TSC Website/church-website/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/TSC Website/church-website/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/TSC Website/church-website/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/TSC Website/church-website/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const navLinks = [
    {
        name: "Home",
        href: "/"
    },
    {
        name: "About",
        href: "/about"
    },
    {
        name: "Sermons",
        href: "/sermons"
    },
    {
        name: "Testimonies",
        href: "/testimonies"
    },
    {
        name: "Events",
        href: "/events"
    },
    {
        name: "Partnership",
        href: "/partnership"
    },
    {
        name: "Contact",
        href: "/contact"
    }
];
const languages = [
    {
        name: "English",
        active: true
    },
    {
        name: "Kinyarwanda",
        active: false
    },
    {
        name: "French",
        active: false
    }
];
function Navbar() {
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLangOpen, setIsLangOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const dropdownRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    // Close dropdown when clicking outside
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            function handleClickOutside(event) {
                if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                    setIsLangOpen(false);
                }
            }
            document.addEventListener("mousedown", handleClickOutside);
            return ({
                "Navbar.useEffect": ()=>document.removeEventListener("mousedown", handleClickOutside)
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "fixed top-8 left-0 right-0 z-50 flex justify-center px-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-[5px] shadow-lg px-8 py-3 w-full max-w-[1240px] flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "flex-shrink-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative w-[96px] h-[78px] flex items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/logo.png",
                                alt: "TSC Logo",
                                fill: true,
                                className: "object-contain",
                                priority: true
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Documents/TSC Website/church-website/components/layout/Navbar.tsx",
                                lineNumber: 50,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documents/TSC Website/church-website/components/layout/Navbar.tsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Documents/TSC Website/church-website/components/layout/Navbar.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "hidden lg:flex items-center gap-[24px]",
                        children: navLinks.map((link)=>{
                            const isActive = pathname === link.href;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: link.href,
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-[16px] font-bold transition-colors", isActive ? "text-[#DD5F4C]" : "text-gray-600 hover:text-[#DD5F4C]"),
                                children: link.name
                            }, link.name, false, {
                                fileName: "[project]/OneDrive/Documents/TSC Website/church-website/components/layout/Navbar.tsx",
                                lineNumber: 59,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Documents/TSC Website/church-website/components/layout/Navbar.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden lg:flex items-center gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                ref: dropdownRef,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "flex items-center gap-[4px] pl-[8px] text-gray-500 hover:text-black transition-colors",
                                        onClick: ()=>setIsLangOpen(!isLangOpen),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                                size: 20
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Documents/TSC Website/church-website/components/layout/Navbar.tsx",
                                                lineNumber: 84,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[16px] font-bold",
                                                children: "EN"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Documents/TSC Website/church-website/components/layout/Navbar.tsx",
                                                lineNumber: 85,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Documents/TSC Website/church-website/components/layout/Navbar.tsx",
                                        lineNumber: 80,
                                        columnNumber: 13
                                    }, this),
                                    isLangOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute top-full right-[-10px] mt-4 bg-white shadow-2xl flex flex-col gap-[8px] z-50 overflow-hidden animate-in fade-in zoom-in-95 duration-200",
                                        style: {
                                            width: "137px",
                                            padding: "16px",
                                            borderRadius: "0 0 8px 8px"
                                        },
                                        children: languages.map((lang)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setIsLangOpen(false),
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-left text-[16px] leading-[24px] transition-colors", lang.active ? "text-[#DD5F4C] font-normal" : "text-gray-600 hover:text-black font-normal"),
                                                children: lang.name
                                            }, lang.name, false, {
                                                fileName: "[project]/OneDrive/Documents/TSC Website/church-website/components/layout/Navbar.tsx",
                                                lineNumber: 99,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documents/TSC Website/church-website/components/layout/Navbar.tsx",
                                        lineNumber: 90,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Documents/TSC Website/church-website/components/layout/Navbar.tsx",
                                lineNumber: 79,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/give",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "text-white font-bold text-[15px] rounded-[100px] flex items-center justify-center shadow-md transition-transform duration-300 hover:scale-105 active:scale-95",
                                    style: {
                                        backgroundColor: "#DD5F4C",
                                        width: "116px",
                                        height: "44px"
                                    },
                                    children: "Give Now"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documents/TSC Website/church-website/components/layout/Navbar.tsx",
                                    lineNumber: 118,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Documents/TSC Website/church-website/components/layout/Navbar.tsx",
                                lineNumber: 117,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Documents/TSC Website/church-website/components/layout/Navbar.tsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "lg:hidden p-2 text-gray-800",
                        onClick: ()=>setIsOpen(!isOpen),
                        children: isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            size: 28
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documents/TSC Website/church-website/components/layout/Navbar.tsx",
                            lineNumber: 133,
                            columnNumber: 21
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                            size: 28
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documents/TSC Website/church-website/components/layout/Navbar.tsx",
                            lineNumber: 133,
                            columnNumber: 39
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Documents/TSC Website/church-website/components/layout/Navbar.tsx",
                        lineNumber: 132,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Documents/TSC Website/church-website/components/layout/Navbar.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-28 left-4 right-4 bg-white rounded-xl shadow-2xl p-6 flex flex-col gap-4 lg:hidden z-50 animate-in slide-in-from-top-2",
                children: [
                    navLinks.map((link)=>{
                        const isActive = pathname === link.href;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: link.href,
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-lg font-bold py-2 border-b border-gray-100", isActive ? "text-[#DD5F4C]" : "text-gray-800"),
                            onClick: ()=>setIsOpen(false),
                            children: link.name
                        }, link.name, false, {
                            fileName: "[project]/OneDrive/Documents/TSC Website/church-website/components/layout/Navbar.tsx",
                            lineNumber: 145,
                            columnNumber: 15
                        }, this);
                    }),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-4 py-2",
                        children: languages.map((lang)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm", lang.active ? "text-[#DD5F4C] font-bold" : "text-gray-500"),
                                children: lang.name
                            }, lang.name, false, {
                                fileName: "[project]/OneDrive/Documents/TSC Website/church-website/components/layout/Navbar.tsx",
                                lineNumber: 162,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Documents/TSC Website/church-website/components/layout/Navbar.tsx",
                        lineNumber: 160,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/give",
                        onClick: ()=>setIsOpen(false),
                        className: "w-full mt-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "w-full text-white font-bold text-[16px] rounded-[100px] flex items-center justify-center shadow-md py-3",
                            style: {
                                backgroundColor: "#DD5F4C"
                            },
                            children: "Give Now"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documents/TSC Website/church-website/components/layout/Navbar.tsx",
                            lineNumber: 170,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Documents/TSC Website/church-website/components/layout/Navbar.tsx",
                        lineNumber: 169,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Documents/TSC Website/church-website/components/layout/Navbar.tsx",
                lineNumber: 139,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Documents/TSC Website/church-website/components/layout/Navbar.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
_s(Navbar, "re9DsU9hBkbJosq80uhGZ8MfBOM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Documents/TSC Website/church-website/components/sections/Hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Hero",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/TSC Website/church-website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// 1. Import 'Variants' type to fix the TypeScript error
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/TSC Website/church-website/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client";
;
;
function Hero() {
    // 2. Define the types explicitly as ': Variants'
    const containerVariants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.4,
                delayChildren: 0.3
            }
        }
    };
    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 30,
            filter: "blur(10px)" // Starts blurry (ethereal effect)
        },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
                duration: 1.2,
                ease: "easeOut" // TypeScript now knows this is a valid animation type
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative h-screen w-full overflow-hidden bg-black flex items-center justify-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-0 overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "relative w-full h-full bg-cover bg-center bg-no-repeat",
                    style: {
                        backgroundImage: "url('/hero-bg.jpg')"
                    },
                    // The Animation: Zoom out slowly from 115% to 100%
                    initial: {
                        scale: 1.15
                    },
                    animate: {
                        scale: 1
                    },
                    transition: {
                        duration: 10,
                        ease: "easeOut"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 bg-[#000000]/50 mix-blend-multiply"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documents/TSC Website/church-website/components/sections/Hero.tsx",
                            lineNumber: 51,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documents/TSC Website/church-website/components/sections/Hero.tsx",
                            lineNumber: 52,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Documents/TSC Website/church-website/components/sections/Hero.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Documents/TSC Website/church-website/components/sections/Hero.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-20 flex flex-col items-center justify-center px-4 text-center mt-16 md:mt-24",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h1, {
                        className: "leading-tight drop-shadow-2xl",
                        variants: containerVariants,
                        initial: "hidden",
                        animate: "visible",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                variants: itemVariants,
                                className: "block font-medium text-5xl md:text-7xl lg:text-[90px] mb-2 md:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#F5BE40] via-[#FFFFFF] to-[#F5BE40]",
                                children: "Welcome to"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Documents/TSC Website/church-website/components/sections/Hero.tsx",
                                lineNumber: 67,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                variants: itemVariants,
                                className: "block font-bold text-6xl md:text-8xl lg:text-[110px] mb-2 md:mb-4 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#F5BE40] via-[#FFFFFF] to-[#F5BE40]",
                                children: "True Salvation"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Documents/TSC Website/church-website/components/sections/Hero.tsx",
                                lineNumber: 75,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                variants: itemVariants,
                                className: "block font-bold text-6xl md:text-8xl lg:text-[110px] text-transparent bg-clip-text bg-gradient-to-r from-[#F5BE40] via-[#FFFFFF] to-[#F5BE40]",
                                children: "Church"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Documents/TSC Website/church-website/components/sections/Hero.tsx",
                                lineNumber: 83,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Documents/TSC Website/church-website/components/sections/Hero.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        transition: {
                            delay: 2.5,
                            duration: 1.5
                        },
                        className: "absolute bottom-10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-[1px] h-[60px] bg-gradient-to-b from-transparent via-[#F5BE40] to-transparent opacity-60"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documents/TSC Website/church-website/components/sections/Hero.tsx",
                            lineNumber: 99,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Documents/TSC Website/church-website/components/sections/Hero.tsx",
                        lineNumber: 93,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Documents/TSC Website/church-website/components/sections/Hero.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Documents/TSC Website/church-website/components/sections/Hero.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_c = Hero;
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Documents/TSC Website/church-website/components/sections/MeetApostle.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MeetApostle",
    ()=>MeetApostle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/TSC Website/church-website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/TSC Website/church-website/node_modules/next/image.js [app-client] (ecmascript)");
"use client";
;
;
function MeetApostle() {
    return(// 1. CONTAINER: Added min-h-[750px] for Mobile height, changed flex-col to items-end
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-black relative overflow-hidden flex items-end md:block min-h-[750px] md:min-h-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 w-full h-full md:w-[75%] md:left-auto md:right-0 md:z-10 overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative h-full w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: "/apostle.jpeg",
                            alt: "Apostle Charles",
                            fill: true,
                            // Mobile: scale-[1.4] origin-top (Zoomed on face).
                            // Desktop: scale-[1.4] origin-top (Matches your desktop preference).
                            className: "object-cover object-top scale-[1.4] origin-top",
                            priority: true
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documents/TSC Website/church-website/components/sections/MeetApostle.tsx",
                            lineNumber: 20,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute bottom-0 left-0 right-0 h-[80%] bg-gradient-to-t from-black via-black/80 to-transparent md:hidden"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documents/TSC Website/church-website/components/sections/MeetApostle.tsx",
                            lineNumber: 31,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden md:block absolute inset-y-0 left-0 w-[50%] bg-gradient-to-r from-black via-black/80 to-transparent"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documents/TSC Website/church-website/components/sections/MeetApostle.tsx",
                            lineNumber: 34,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Documents/TSC Website/church-website/components/sections/MeetApostle.tsx",
                    lineNumber: 19,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Documents/TSC Website/church-website/components/sections/MeetApostle.tsx",
                lineNumber: 16,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-20 w-full bg-transparent md:max-w-[1440px] md:min-h-[600px] md:mx-auto md:px-[80px] md:flex md:items-end pointer-events-none",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pointer-events-auto px-6 pb-16 pt-32 md:py-20 md:pb-[60px] md:px-0 max-w-[485px] flex flex-col gap-[24px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "font-bold text-[36px] leading-[42px] md:text-[45px] md:leading-[52px] text-transparent bg-clip-text bg-gradient-to-r from-[#F5BE40] via-[#ffffff] to-[#F5BE40] tracking-[-2px] drop-shadow-lg",
                            children: "Our Spiritual Leadership"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documents/TSC Website/church-website/components/sections/MeetApostle.tsx",
                            lineNumber: 48,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-normal text-[16px] leading-[26px] text-white/90 drop-shadow-md",
                            children: "Apostle Charles serves as a minister of the Gospel of Jesus Christ, entrusted with shepherding, teaching, and guiding the church in accordance with biblical doctrine. His calling is to point people to Christ, encourage repentance, discipleship, and faithful Christian living through prayer, teaching, and pastoral leadership."
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documents/TSC Website/church-website/components/sections/MeetApostle.tsx",
                            lineNumber: 51,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Documents/TSC Website/church-website/components/sections/MeetApostle.tsx",
                    lineNumber: 47,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Documents/TSC Website/church-website/components/sections/MeetApostle.tsx",
                lineNumber: 44,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Documents/TSC Website/church-website/components/sections/MeetApostle.tsx",
        lineNumber: 10,
        columnNumber: 9
    }, this));
}
_c = MeetApostle;
var _c;
__turbopack_context__.k.register(_c, "MeetApostle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Documents/TSC Website/church-website/components/sections/Testimonies.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Testimonies",
    ()=>Testimonies
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/TSC Website/church-website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/TSC Website/church-website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/TSC Website/church-website/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/TSC Website/church-website/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/TSC Website/church-website/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/TSC Website/church-website/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/TSC Website/church-website/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
// 👇 PASTE YOUR YOUTUBE VIDEO IDs HERE
const TESTIMONIES = [
    {
        id: 1,
        videoId: "pRPUeB6pvaY",
        title: "God of Mighty Works! Come and See .",
        duration: "33:30"
    },
    {
        id: 2,
        videoId: "gOR0pFrOaXU",
        title: "We miraculously gave birth to our first child after many years.",
        duration: "59:45"
    },
    {
        id: 3,
        videoId: "Mp5kqVAksDw",
        title: "Healed of Heart Disease, Bones, Liver and Kidneys",
        duration: "39:20"
    },
    {
        id: 4,
        videoId: "qA7va6EbSmY",
        title: "Completely Healed of Kidney Failure",
        duration: "09:00"
    },
    {
        id: 5,
        videoId: "ffcRuAl3ySA",
        title: "Completely Healed of Blood Cancer",
        duration: "12:00"
    },
    {
        id: 6,
        videoId: "f4-cRcxQVNk",
        title: "God Restores His Legs",
        duration: "18:00"
    }
];
function Testimonies() {
    _s();
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeVideo, setActiveVideo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Navigation Logic
    const nextSlide = ()=>{
        setCurrentIndex((prev)=>prev === TESTIMONIES.length - 1 ? 0 : prev + 1);
    };
    const prevSlide = ()=>{
        setCurrentIndex((prev)=>prev === 0 ? TESTIMONIES.length - 1 : prev - 1);
    };
    // Open Modal Logic
    const handlePlay = (videoId)=>{
        setActiveVideo(videoId);
        setIsPlaying(true);
    };
    // Close Modal Logic
    const handleClose = ()=>{
        setIsPlaying(false);
        setActiveVideo(null);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-[#1B1C1E] py-20 lg:py-28 overflow-hidden relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center mb-16 space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-caveat text-[28px] text-[#F5BE41] tracking-[0.5px]",
                        style: {
                            fontVariantNumeric: "lining-nums tabular-nums",
                            fontFeatureSettings: '"liga" off, "calt" off',
                            fontFamily: "var(--font-caveat)"
                        },
                        children: "Real Stories. Real Transformation."
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Documents/TSC Website/church-website/components/sections/Testimonies.tsx",
                        lineNumber: 78,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-white text-[48px] font-bold leading-tight",
                        children: "Lives Transformed by Christ"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Documents/TSC Website/church-website/components/sections/Testimonies.tsx",
                        lineNumber: 87,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Documents/TSC Website/church-website/components/sections/Testimonies.tsx",
                lineNumber: 77,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full max-w-[1440px] mx-auto h-[500px] flex items-center justify-center perspective-1000",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: prevSlide,
                        className: "absolute left-4 md:left-12 z-30 p-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                            size: 32
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documents/TSC Website/church-website/components/sections/Testimonies.tsx",
                            lineNumber: 100,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Documents/TSC Website/church-website/components/sections/Testimonies.tsx",
                        lineNumber: 96,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative w-full h-full flex items-center justify-center",
                        children: TESTIMONIES.map((video, index)=>{
                            // Logic to determine position relative to active slide
                            let position = "hidden";
                            let zIndex = 0;
                            let scale = 0.8;
                            let opacity = 0;
                            let translateX = "0%";
                            if (index === currentIndex) {
                                position = "active";
                                zIndex = 20;
                                scale = 1;
                                opacity = 1;
                                translateX = "0%";
                            } else if (index === (currentIndex - 1 + TESTIMONIES.length) % TESTIMONIES.length) {
                                position = "prev";
                                zIndex = 10;
                                scale = 0.85;
                                opacity = 0.4;
                                translateX = "-60%"; // Move Left
                            } else if (index === (currentIndex + 1) % TESTIMONIES.length) {
                                position = "next";
                                zIndex = 10;
                                scale = 0.85;
                                opacity = 0.4;
                                translateX = "60%"; // Move Right
                            }
                            // If not one of the 3 visible slides, hide it completely
                            if (position === "hidden") return null;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                // UPDATED: Added responsive width/height classes
                                // w-[90vw] = 90% of screen width on mobile
                                // md:w-[800px] = Fixed 800px on desktop
                                className: "absolute transition-all duration-500 ease-in-out origin-center rounded-[16px] overflow-hidden shadow-2xl bg-gray-900 w-[90vw] h-[250px] md:w-[800px] md:h-[450px]",
                                style: {
                                    // Removed fixed width/height from here, handled by Tailwind classes above
                                    zIndex: zIndex,
                                    opacity: opacity,
                                    transform: `translateX(${translateX}) scale(${scale})`
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: `https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`,
                                        alt: video.title,
                                        fill: true,
                                        className: "object-cover"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documents/TSC Website/church-website/components/sections/Testimonies.tsx",
                                        lineNumber: 151,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documents/TSC Website/church-website/components/sections/Testimonies.tsx",
                                        lineNumber: 159,
                                        columnNumber: 33
                                    }, this),
                                    position === "active" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handlePlay(video.videoId),
                                        className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80px] h-[80px] bg-[#F5BE41] rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg group cursor-pointer",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                            size: 32,
                                            fill: "black",
                                            className: "text-black ml-1"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documents/TSC Website/church-website/components/sections/Testimonies.tsx",
                                            lineNumber: 167,
                                            columnNumber: 41
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documents/TSC Website/church-website/components/sections/Testimonies.tsx",
                                        lineNumber: 163,
                                        columnNumber: 37
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute bottom-0 left-0 w-full p-8 flex justify-between items-end",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-white text-[15px] md:text-[24px] font-bold leading-tight max-w-[80%] md:max-w-[70%] drop-shadow-md",
                                                children: video.title
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Documents/TSC Website/church-website/components/sections/Testimonies.tsx",
                                                lineNumber: 175,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-black/30 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full text-white text-[14px] font-medium",
                                                children: video.duration
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Documents/TSC Website/church-website/components/sections/Testimonies.tsx",
                                                lineNumber: 180,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Documents/TSC Website/church-website/components/sections/Testimonies.tsx",
                                        lineNumber: 172,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, video.id, true, {
                                fileName: "[project]/OneDrive/Documents/TSC Website/church-website/components/sections/Testimonies.tsx",
                                lineNumber: 137,
                                columnNumber: 29
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Documents/TSC Website/church-website/components/sections/Testimonies.tsx",
                        lineNumber: 104,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: nextSlide,
                        className: "absolute right-4 md:right-12 z-30 p-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                            size: 32
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documents/TSC Website/church-website/components/sections/Testimonies.tsx",
                            lineNumber: 194,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Documents/TSC Website/church-website/components/sections/Testimonies.tsx",
                        lineNumber: 190,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Documents/TSC Website/church-website/components/sections/Testimonies.tsx",
                lineNumber: 93,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center gap-3 mt-8",
                children: TESTIMONIES.map((_, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setCurrentIndex(idx),
                        className: `w-2.5 h-2.5 rounded-full transition-colors ${idx === currentIndex ? "bg-white" : "bg-white/20"}`
                    }, idx, false, {
                        fileName: "[project]/OneDrive/Documents/TSC Website/church-website/components/sections/Testimonies.tsx",
                        lineNumber: 202,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/OneDrive/Documents/TSC Website/church-website/components/sections/Testimonies.tsx",
                lineNumber: 200,
                columnNumber: 13
            }, this),
            isPlaying && activeVideo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 animate-in fade-in duration-300",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleClose,
                        className: "absolute top-6 right-6 text-white/50 hover:text-white transition-colors cursor-pointer",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            size: 48
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documents/TSC Website/church-website/components/sections/Testimonies.tsx",
                            lineNumber: 220,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Documents/TSC Website/church-website/components/sections/Testimonies.tsx",
                        lineNumber: 216,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full max-w-5xl aspect-video rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-black",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                            width: "100%",
                            height: "100%",
                            src: `https://www.youtube.com/embed/${activeVideo}?autoplay=1`,
                            title: "YouTube video player",
                            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                            allowFullScreen: true,
                            className: "border-none"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documents/TSC Website/church-website/components/sections/Testimonies.tsx",
                            lineNumber: 225,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Documents/TSC Website/church-website/components/sections/Testimonies.tsx",
                        lineNumber: 224,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Documents/TSC Website/church-website/components/sections/Testimonies.tsx",
                lineNumber: 213,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Documents/TSC Website/church-website/components/sections/Testimonies.tsx",
        lineNumber: 74,
        columnNumber: 9
    }, this);
}
_s(Testimonies, "k/S3h5MG68sY7h8RXGtwEJfPmMA=");
_c = Testimonies;
var _c;
__turbopack_context__.k.register(_c, "Testimonies");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Documents/TSC Website/church-website/components/sections/Sermons.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sermons",
    ()=>Sermons
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/TSC Website/church-website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/TSC Website/church-website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/TSC Website/church-website/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/TSC Website/church-website/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/TSC Website/church-website/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/TSC Website/church-website/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/TSC Website/church-website/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
// 👇 PASTE YOUR YOUTUBE VIDEO IDs HERE
const SERMONS = [
    {
        id: 1,
        videoId: "JUmAIkXdcRo",
        title: "True Fruits Believers Should Bear"
    },
    {
        id: 2,
        videoId: "nWjOdA9X8Ag",
        title: "Key To A Successful Marriage"
    },
    {
        id: 3,
        videoId: "ogjc04lqV9U",
        title: "Do This To Unlock Your Blessings"
    }
];
function Sermons() {
    _s();
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeVideo, setActiveVideo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handlePlay = (videoId)=>{
        setActiveVideo(videoId);
        setIsPlaying(true);
    };
    const handleClose = ()=>{
        setIsPlaying(false);
        setActiveVideo(null);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-white py-20 lg:py-28",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-[1280px] px-6 md:px-12 flex flex-col gap-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col md:flex-row justify-between items-end gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-start gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-caveat text-[28px] leading-[27px] text-[#DD5F4C] tracking-[0.5px]",
                                        style: {
                                            fontVariantNumeric: "lining-nums tabular-nums",
                                            fontFeatureSettings: '"liga" off, "calt" off',
                                            fontFamily: "var(--font-caveat)"
                                        },
                                        children: "Growth"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documents/TSC Website/church-website/components/sections/Sermons.tsx",
                                        lineNumber: 55,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-[40px] md:text-[48px] font-bold text-gray-900 leading-tight",
                                        children: "Feed Your Spirit."
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documents/TSC Website/church-website/components/sections/Sermons.tsx",
                                        lineNumber: 64,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[18px] text-gray-500 mt-2 max-w-xl",
                                        children: "Access the latest sermons and exclusive teachings to fuel your walk with God."
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documents/TSC Website/church-website/components/sections/Sermons.tsx",
                                        lineNumber: 67,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Documents/TSC Website/church-website/components/sections/Sermons.tsx",
                                lineNumber: 54,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "\\sermons",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "group flex items-center gap-2 rounded-[100px] border border-[#DD5F4C] px-[24px] py-[12px] text-[14px] font-bold text-[#DD5F4C] transition-colors hover:bg-[#DD5F4C] hover:text-white shrink-0",
                                    children: [
                                        "View All Sermons",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documents/TSC Website/church-website/components/sections/Sermons.tsx",
                                            lineNumber: 76,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Documents/TSC Website/church-website/components/sections/Sermons.tsx",
                                    lineNumber: 74,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Documents/TSC Website/church-website/components/sections/Sermons.tsx",
                                lineNumber: 73,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Documents/TSC Website/church-website/components/sections/Sermons.tsx",
                        lineNumber: 51,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-3 gap-8",
                        children: SERMONS.map((video)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-4 group cursor-pointer",
                                onClick: ()=>handlePlay(video.videoId),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative h-[285px] w-full rounded-[16px] overflow-hidden shadow-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: `https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`,
                                                alt: video.title,
                                                fill: true,
                                                className: "object-cover transition-transform duration-500 group-hover:scale-105"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Documents/TSC Website/church-website/components/sections/Sermons.tsx",
                                                lineNumber: 91,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Documents/TSC Website/church-website/components/sections/Sermons.tsx",
                                                lineNumber: 99,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute bottom-6 left-6 flex items-center gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-[50px] h-[50px] bg-[#F5BE41] rounded-full flex items-center justify-center shadow-lg transition-transform group-hover:scale-110",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                                            size: 20,
                                                            fill: "black",
                                                            className: "text-black ml-1"
                                                        }, void 0, false, {
                                                            fileName: "[project]/OneDrive/Documents/TSC Website/church-website/components/sections/Sermons.tsx",
                                                            lineNumber: 106,
                                                            columnNumber: 41
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Documents/TSC Website/church-website/components/sections/Sermons.tsx",
                                                        lineNumber: 105,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "border-l border-white/50 pl-4 flex flex-col justify-center h-[40px]",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-white text-[12px] font-bold leading-none mb-1",
                                                                children: "Watch"
                                                            }, void 0, false, {
                                                                fileName: "[project]/OneDrive/Documents/TSC Website/church-website/components/sections/Sermons.tsx",
                                                                lineNumber: 111,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-white text-[12px] font-bold leading-none",
                                                                children: "Sermon"
                                                            }, void 0, false, {
                                                                fileName: "[project]/OneDrive/Documents/TSC Website/church-website/components/sections/Sermons.tsx",
                                                                lineNumber: 114,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/OneDrive/Documents/TSC Website/church-website/components/sections/Sermons.tsx",
                                                        lineNumber: 110,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/OneDrive/Documents/TSC Website/church-website/components/sections/Sermons.tsx",
                                                lineNumber: 102,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Documents/TSC Website/church-website/components/sections/Sermons.tsx",
                                        lineNumber: 88,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-[18px] font-bold leading-[24px] text-gray-900 group-hover:text-[#DD5F4C] transition-colors",
                                        children: video.title
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documents/TSC Website/church-website/components/sections/Sermons.tsx",
                                        lineNumber: 124,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, video.id, true, {
                                fileName: "[project]/OneDrive/Documents/TSC Website/church-website/components/sections/Sermons.tsx",
                                lineNumber: 85,
                                columnNumber: 25
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Documents/TSC Website/church-website/components/sections/Sermons.tsx",
                        lineNumber: 83,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Documents/TSC Website/church-website/components/sections/Sermons.tsx",
                lineNumber: 48,
                columnNumber: 13
            }, this),
            isPlaying && activeVideo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 animate-in fade-in duration-300",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleClose,
                        className: "absolute top-6 right-6 text-white/50 hover:text-white transition-colors cursor-pointer",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            size: 48
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documents/TSC Website/church-website/components/sections/Sermons.tsx",
                            lineNumber: 141,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Documents/TSC Website/church-website/components/sections/Sermons.tsx",
                        lineNumber: 137,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full max-w-5xl aspect-video rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-black",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$TSC__Website$2f$church$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                            width: "100%",
                            height: "100%",
                            src: `https://www.youtube.com/embed/${activeVideo}?autoplay=1`,
                            title: "YouTube video player",
                            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                            allowFullScreen: true,
                            className: "border-none"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documents/TSC Website/church-website/components/sections/Sermons.tsx",
                            lineNumber: 144,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Documents/TSC Website/church-website/components/sections/Sermons.tsx",
                        lineNumber: 143,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Documents/TSC Website/church-website/components/sections/Sermons.tsx",
                lineNumber: 136,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Documents/TSC Website/church-website/components/sections/Sermons.tsx",
        lineNumber: 42,
        columnNumber: 9
    }, this);
}
_s(Sermons, "GDq0UxD3iuUxKkb1ZcAvJayMEEM=");
_c = Sermons;
var _c;
__turbopack_context__.k.register(_c, "Sermons");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=OneDrive_Documents_TSC%20Website_church-website_5f17f1c2._.js.map