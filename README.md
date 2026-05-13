# smartui-figma-web-cli-sample — TestMu AI (Formerly LambdaTest)

## Steps to run:
1. Please clone the following sample Github repo (`https://github.com/LambdaTest/smartui-figma-web-cli-sample/`).

```bash
git clone https://github.com/LambdaTest/smartui-figma-web-cli-sample
```
2. Install the node modules using the command:

```bash
npm i
```
3. Configure your project token and Figma token

- Setup your project token show in the **SmartUI** app after, creating your project.

<Tabs className="docs__val" groupId="language">
<TabItem value="MacOS/Linux" label="MacOS/Linux" default>

```bash
export PROJECT_TOKEN="123456#1234abcd-****-****-****-************"
```

</TabItem>
<TabItem value="Windows" label="Windows - CMD" default>

```bash
set PROJECT_TOKEN="123456#1234abcd-****-****-****-************"
```

</TabItem>
</Tabs>

- Setup your [personal access token for Figma](https://help.figma.com/hc/en-us/articles/8085703771159-Manage-personal-access-tokens) to authenticate Figma with SmartUI.

<Tabs className="docs__val" groupId="language">
<TabItem value="MacOS/Linux" label="MacOS/Linux" default>

```bash
export FIGMA_TOKEN="123456#1234abcd-****-****-****-************"
```

</TabItem>
<TabItem value="Windows" label="Windows - CMD" default>

```bash
set FIGMA_TOKEN="123456#1234abcd-****-****-****-************"
```

</TabItem>
</Tabs>

4. Create your figma baseline 
```bash
npx smartui upload-figma-web designs.json --buildName=FigmaBaseline1  
```
5. Execute your functional test script (Selenium Nodejs in this sample)
```
npx smartui --config web-config.json exec --buildName=web-build -- node figma-web-local.js
```

## 🚀 [LambdaTest is Now TestMu AI](https://www.testmuai.com/lambdatest-is-now-testmuai/)

👋 Welcome to TestMu AI, the next evolution of LambdaTest. As of January 2026, LambdaTest has officially rebranded to TestMu AI. We have evolved from a cross-browser testing cloud into a unified, AI-native quality engineering platform designed for the modern DevOps era.

Whether you have been part of the LambdaTest community for years or are just discovering TestMu AI, our mission remains the same: to help you ship faster with high-scale test execution, autonomous testing, and deep quality analytics.

**🔄 Our Rebrand Journey**

We chose the name TestMu AI to reflect our shift towards intelligent, autonomous testing. While our identity has changed, our core technology and commitment to the testing community stay the same.

**✨ Specialties**

- 🤖 AI-Native Test Execution (Formerly LambdaTest)
- ⚡ Autonomous Test Automation
- 🌐 Cross-Browser & Mobile Testing
- 📊 Unified Quality Intelligence

👉 Find [LambdaTest's New Home](https://www.testmuai.com/).