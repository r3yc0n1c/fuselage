"use strict";(self.webpackChunk_rocket_chat_fuselage=self.webpackChunk_rocket_chat_fuselage||[]).push([[3543],{"./src/components/SearchInput/SearchInput.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Disabled:()=>Disabled,Invalid:()=>Invalid,States:()=>States,WithIconAddon:()=>WithIconAddon,WithPlaceholder:()=>WithPlaceholder,WithValue:()=>WithValue,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_storybook_helpers__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./.storybook/helpers.tsx"),_Icon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Icon/index.ts"),_SearchInput__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/SearchInput/SearchInput.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"Inputs/SearchInput",component:_SearchInput__WEBPACK_IMPORTED_MODULE_3__.D},Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_SearchInput__WEBPACK_IMPORTED_MODULE_3__.D,{"aria-label":"search",...args}),Default=Template.bind({}),WithIconAddon=Template.bind({});WithIconAddon.args={addon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_2__.I,{name:"send",size:"x20"})};const Invalid=Template.bind({});Invalid.args={error:"Error"};const Disabled=Template.bind({});Disabled.args={disabled:!0};const WithPlaceholder=Template.bind({});WithPlaceholder.args={placeholder:"Placeholder"};const WithValue=Template.bind({});WithValue.args={defaultValue:"cat rooms"};const States=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_storybook_helpers__WEBPACK_IMPORTED_MODULE_1__.DV,{component:_SearchInput__WEBPACK_IMPORTED_MODULE_3__.D,common:{onChange:()=>{},"aria-label":"search"},xAxis:{default:{},"with placeholder":{placeholder:"Placeholder"},"with value":{value:"Value"},"with icon":{addon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_2__.I,{name:"magnifier",size:"x20"}),value:"Value"}},yAxis:{default:{},hover:{className:"hover"},active:{className:"active"},focus:{className:"focus"},disabled:{disabled:!0},errored:{error:"Error"},"errored + hover":{className:"hover",error:"Error"},"errored + active":{className:"active",error:"Error"},"errored + focus":{className:"focus",error:"Error"}}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_storybook_helpers__WEBPACK_IMPORTED_MODULE_1__.DV,{component:_SearchInput__WEBPACK_IMPORTED_MODULE_3__.D,common:{onChange:()=>{},small:!0,"aria-label":"search"},xAxis:{small:{},"with placeholder":{placeholder:"Placeholder"},"with value":{value:"Value"},"with icon":{addon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_2__.I,{name:"magnifier",size:"x20"}),value:"Value"}},yAxis:{small:{},hover:{className:"hover"},active:{className:"active"},focus:{className:"focus"},disabled:{disabled:!0},errored:{error:"Error"},"errored + hover":{className:"hover",error:"Error"},"errored + active":{className:"active",error:"Error"},"errored + focus":{className:"focus",error:"Error"}}})]}),__namedExportsOrder=["Default","WithIconAddon","Invalid","Disabled","WithPlaceholder","WithValue","States"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <SearchInput aria-label='search' {...args} />",...Default.parameters?.docs?.source}}},WithIconAddon.parameters={...WithIconAddon.parameters,docs:{...WithIconAddon.parameters?.docs,source:{originalSource:"args => <SearchInput aria-label='search' {...args} />",...WithIconAddon.parameters?.docs?.source}}},Invalid.parameters={...Invalid.parameters,docs:{...Invalid.parameters?.docs,source:{originalSource:"args => <SearchInput aria-label='search' {...args} />",...Invalid.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"args => <SearchInput aria-label='search' {...args} />",...Disabled.parameters?.docs?.source}}},WithPlaceholder.parameters={...WithPlaceholder.parameters,docs:{...WithPlaceholder.parameters?.docs,source:{originalSource:"args => <SearchInput aria-label='search' {...args} />",...WithPlaceholder.parameters?.docs?.source}}},WithValue.parameters={...WithValue.parameters,docs:{...WithValue.parameters?.docs,source:{originalSource:"args => <SearchInput aria-label='search' {...args} />",...WithValue.parameters?.docs?.source}}},States.parameters={...States.parameters,docs:{...States.parameters?.docs,source:{originalSource:"() => <>\n    <PropsVariationSection component={SearchInput} common={{\n    'onChange': () => {},\n    'aria-label': 'search'\n  }} xAxis={{\n    'default': {},\n    'with placeholder': {\n      placeholder: 'Placeholder'\n    },\n    'with value': {\n      value: 'Value'\n    },\n    'with icon': {\n      addon: <Icon name='magnifier' size='x20' />,\n      value: 'Value'\n    }\n  }} yAxis={{\n    'default': {},\n    'hover': {\n      className: 'hover'\n    },\n    'active': {\n      className: 'active'\n    },\n    'focus': {\n      className: 'focus'\n    },\n    'disabled': {\n      disabled: true\n    },\n    'errored': {\n      error: 'Error'\n    },\n    'errored + hover': {\n      className: 'hover',\n      error: 'Error'\n    },\n    'errored + active': {\n      className: 'active',\n      error: 'Error'\n    },\n    'errored + focus': {\n      className: 'focus',\n      error: 'Error'\n    }\n  }} />\n    <PropsVariationSection component={SearchInput} common={{\n    'onChange': () => {},\n    'small': true,\n    'aria-label': 'search'\n  }} xAxis={{\n    'small': {},\n    'with placeholder': {\n      placeholder: 'Placeholder'\n    },\n    'with value': {\n      value: 'Value'\n    },\n    'with icon': {\n      addon: <Icon name='magnifier' size='x20' />,\n      value: 'Value'\n    }\n  }} yAxis={{\n    'small': {},\n    'hover': {\n      className: 'hover'\n    },\n    'active': {\n      className: 'active'\n    },\n    'focus': {\n      className: 'focus'\n    },\n    'disabled': {\n      disabled: true\n    },\n    'errored': {\n      error: 'Error'\n    },\n    'errored + hover': {\n      className: 'hover',\n      error: 'Error'\n    },\n    'errored + active': {\n      className: 'active',\n      error: 'Error'\n    },\n    'errored + focus': {\n      className: 'focus',\n      error: 'Error'\n    }\n  }} />\n  </>",...States.parameters?.docs?.source}}}}}]);