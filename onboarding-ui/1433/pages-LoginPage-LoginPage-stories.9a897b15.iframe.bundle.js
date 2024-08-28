"use strict";(self.webpackChunk_rocket_chat_onboarding_ui=self.webpackChunk_rocket_chat_onboarding_ui||[]).push([[8937],{"./src/pages/LoginPage/LoginPage.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{_LoginPage:()=>_LoginPage,_LoginPasswordLessPage:()=>_LoginPasswordLessPage,__namedExportsOrder:()=>__namedExportsOrder,default:()=>LoginPage_stories});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),esm=__webpack_require__("../layout/dist/esm/index.js"),useTranslation=__webpack_require__("../../node_modules/react-i18next/dist/es/useTranslation.js"),Trans=__webpack_require__("../../node_modules/react-i18next/dist/es/Trans.js"),LoginForm=__webpack_require__("./src/forms/LoginForm/LoginForm.tsx"),TotpForm=__webpack_require__("./src/forms/TotpForm/TotpForm.tsx");const LoginPage=({onCreateAccount,...props})=>{const{t}=(0,useTranslation.B)(),{isMfa,mfaProps}=props;return(0,jsx_runtime.jsxs)(esm.a5,{children:[(0,jsx_runtime.jsx)(esm.I$,{children:t("page.loginPage.title.cloud")}),(0,jsx_runtime.jsx)(esm.Uv,{children:isMfa&&mfaProps?(0,jsx_runtime.jsx)(TotpForm.A,{...mfaProps}):(0,jsx_runtime.jsx)(LoginForm.A,{...props})}),(0,jsx_runtime.jsx)(esm.zX,{children:!isMfa&&(0,jsx_runtime.jsxs)(Trans.x,{i18nKey:"page.loginPage.createAccount.label",children:["New here?",(0,jsx_runtime.jsx)(esm.t5,{fontScale:"p2",onClick:onCreateAccount,children:"Create account"})]})})]})},LoginPage_LoginPage=LoginPage;try{LoginPage.displayName="LoginPage",LoginPage.__docgenInfo={description:"",displayName:"LoginPage",props:{initialValues:{defaultValue:null,description:"",name:"initialValues",required:!1,type:{name:'Omit<LoginFormPayload, "password">'}},onChangeForm:{defaultValue:null,description:"",name:"onChangeForm",required:!0,type:{name:"() => void"}},onResetPassword:{defaultValue:null,description:"",name:"onResetPassword",required:!0,type:{name:"() => void"}},formError:{defaultValue:null,description:"",name:"formError",required:!1,type:{name:"string"}},isPasswordLess:{defaultValue:null,description:"",name:"isPasswordLess",required:!0,type:{name:"boolean"}},isMfa:{defaultValue:null,description:"",name:"isMfa",required:!0,type:{name:"boolean"}},onCreateAccount:{defaultValue:null,description:"",name:"onCreateAccount",required:!0,type:{name:"() => void"}},mfaProps:{defaultValue:null,description:"",name:"mfaProps",required:!1,type:{name:"TotpFormProps"}},onSubmit:{defaultValue:null,description:"",name:"onSubmit",required:!0,type:{name:"SubmitHandler<LoginFormPayload>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/pages/LoginPage/LoginPage.tsx#LoginPage"]={docgenInfo:LoginPage.__docgenInfo,name:"LoginPage",path:"src/pages/LoginPage/LoginPage.tsx#LoginPage"})}catch(__react_docgen_typescript_loader_error){}const LoginPage_stories={title:"pages/LoginPage",component:LoginPage_LoginPage,parameters:{actions:{argTypesRegex:"^on.*"},layout:"fullscreen"}},_LoginPage=args=>(0,jsx_runtime.jsx)(LoginPage_LoginPage,{...args}),_LoginPasswordLessPage=args=>(0,jsx_runtime.jsx)(LoginPage_LoginPage,{...args});_LoginPage.storyName="CloudDefaultLoginPage",_LoginPasswordLessPage.storyName="CloudPasswordLessLoginPage",_LoginPasswordLessPage.args={isPasswordLess:!0};const __namedExportsOrder=["_LoginPage","_LoginPasswordLessPage"];_LoginPage.parameters={..._LoginPage.parameters,docs:{..._LoginPage.parameters?.docs,source:{originalSource:"args => <LoginPage {...args} />",..._LoginPage.parameters?.docs?.source}}},_LoginPasswordLessPage.parameters={..._LoginPasswordLessPage.parameters,docs:{..._LoginPasswordLessPage.parameters?.docs,source:{originalSource:"args => <LoginPage {...args} />",..._LoginPasswordLessPage.parameters?.docs?.source}}}},"./src/forms/TotpForm/TotpForm.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>TotpForm_TotpForm});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),fuselage=__webpack_require__("../fuselage/index.js"),esm=__webpack_require__("../layout/dist/esm/index.js"),index_esm=__webpack_require__("../../node_modules/react-hook-form/dist/index.esm.mjs"),useTranslation=__webpack_require__("../../node_modules/react-i18next/dist/es/useTranslation.js");const TotpActionsWrapper=(0,__webpack_require__("../styled/dist/esm/index.js").A)("div")`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: stretch;

  a {
    margin-block-start: 16px;
  }

  @media (min-width: 1440px) {
    flex-flow: row nowrap;
    padding: 0;
    width: 100%;
    align-items: center;
    max-width: 1152px;

    a {
      padding-inline: 8px;
      margin-block-start: 0;
    }
  }
`;try{TotpActionsWrapper.displayName="TotpActionsWrapper",TotpActionsWrapper.__docgenInfo={description:"",displayName:"TotpActionsWrapper",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/forms/TotpForm/TotpForm.styles.tsx#TotpActionsWrapper"]={docgenInfo:TotpActionsWrapper.__docgenInfo,name:"TotpActionsWrapper",path:"src/forms/TotpForm/TotpForm.styles.tsx#TotpActionsWrapper"})}catch(__react_docgen_typescript_loader_error){}const TotpForm=({onSubmit,initialValues,isBackupCode=!1,onChangeTotpForm})=>{const{t}=(0,useTranslation.B)(),{register,handleSubmit,formState:{errors,isValidating,isSubmitting}}=(0,index_esm.mN)({defaultValues:{...initialValues}});return(0,jsx_runtime.jsxs)(esm.lV,{onSubmit:handleSubmit(onSubmit),children:[(0,jsx_runtime.jsx)(esm.lV.Container,{children:(0,jsx_runtime.jsx)(fuselage.FieldGroup,{children:(0,jsx_runtime.jsxs)(fuselage.Field,{children:[isBackupCode?(0,jsx_runtime.jsx)(fuselage.FieldLabel,{children:t("form.totpForm.fields.backupCode.label")}):(0,jsx_runtime.jsx)(fuselage.FieldLabel,{children:t("form.totpForm.fields.totpCode.label")}),(0,jsx_runtime.jsx)(fuselage.FieldRow,{children:isBackupCode?(0,jsx_runtime.jsx)(fuselage.TextInput,{...register("backupCode",{required:String(t("component.form.requiredField"))}),placeholder:t("form.totpForm.fields.backupCode.placeholder")}):(0,jsx_runtime.jsx)(fuselage.NumberInput,{...register("totpCode",{required:String(t("component.form.requiredField"))}),placeholder:t("form.totpForm.fields.totpCode.placeholder")})}),errors.backupCode&&(0,jsx_runtime.jsx)(fuselage.FieldError,{children:errors.backupCode.message}),errors.totpCode&&(0,jsx_runtime.jsx)(fuselage.FieldError,{children:errors.totpCode.message})]})})}),(0,jsx_runtime.jsx)(esm.lV.Footer,{children:(0,jsx_runtime.jsxs)(TotpActionsWrapper,{children:[(0,jsx_runtime.jsx)(fuselage.Button,{type:"submit",loading:isValidating||isSubmitting,primary:!0,children:t("form.totpForm.button.text")}),(0,jsx_runtime.jsx)(esm.t5,{fontScale:"p2",onClick:onChangeTotpForm,children:t(isBackupCode?"form.totpForm.buttonTotpCode.text":"form.totpForm.buttonBackupCode.text")})]})})]})},TotpForm_TotpForm=TotpForm;try{TotpForm.displayName="TotpForm",TotpForm.__docgenInfo={description:"",displayName:"TotpForm",props:{initialValues:{defaultValue:null,description:"",name:"initialValues",required:!1,type:{name:"TotpFormPayload"}},onChangeTotpForm:{defaultValue:null,description:"",name:"onChangeTotpForm",required:!0,type:{name:"() => void"}},isBackupCode:{defaultValue:{value:"false"},description:"",name:"isBackupCode",required:!1,type:{name:"boolean"}},formError:{defaultValue:null,description:"",name:"formError",required:!1,type:{name:"string"}},onSubmit:{defaultValue:null,description:"",name:"onSubmit",required:!0,type:{name:"SubmitHandler<TotpFormPayload>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/forms/TotpForm/TotpForm.tsx#TotpForm"]={docgenInfo:TotpForm.__docgenInfo,name:"TotpForm",path:"src/forms/TotpForm/TotpForm.tsx#TotpForm"})}catch(__react_docgen_typescript_loader_error){}}}]);