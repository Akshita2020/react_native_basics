This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

## Step 1: Start Metro

First, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

### Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
bundle exec pod install
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.

## Step 3: Modify your app

Now that you have successfully run the app, let's make changes!

Open `App.tsx` in your text editor of choice and make some changes. When you save, your app will automatically update and reflect these changes — this is powered by [Fast Refresh](https://reactnative.dev/docs/fast-refresh).

When you want to forcefully reload, for example to reset the state of your app, you can perform a full reload:

- **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Dev Menu**, accessed via <kbd>Ctrl</kbd> + <kbd>M</kbd> (Windows/Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (macOS).
- **iOS**: Press <kbd>R</kbd> in iOS Simulator.

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [docs](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you're having issues getting the above steps to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
# StylingsInJavascript





Bilkul! Chalo is video ka explanation karte hain **Hinglish** mein, **layman language** mein — jaise ek teacher apne student ko samjhata hai.

---

### 💡 **JSX kya hota hai React Native mein?**

JSX ka full form hota hai: **JavaScript XML**

Ab iska matlab kya hua?

👉 JSX ek **syntax extension** hai JavaScript ka, jisme hum **HTML jaise code** likh sakte hain JavaScript file ke andar.

React Native mein hum jo UI (User Interface) banate hain — jaise buttons, text, images — wo sab hum JSX ki madad se likhte hain.

---

### 🔍 **JSX ka simple example:**

```jsx
import { Text } from 'react-native';

export default function App() {
  return (
    <Text>Hello World</Text>
  );
}
```

Yeh line:

```jsx
<Text>Hello World</Text>
```

lag rahi hai jaise HTML ka tag, lekin yeh actually JSX hai — JavaScript code hai jo HTML jaise dikhta hai.

---

### 🤔 JSX ke bina kaise likhte?

Agar hum JSX **na** use karein, to same cheez likhne ke liye kuch aisa code likhna padta:

```js
React.createElement(Text, null, "Hello World");
```

Samjhe? Yeh thoda complex hai, aur jab UI zyada complex ho jaata hai — nested components ho jaate hain — to bina JSX ke code **bahut messy aur hard to read** ho jaata hai.

---

### 🛠 JSX kaise kaam karta hai?

- JSX sirf **likhne mein easy** hota hai.
- Jab aap app build karte ho, to ek tool hota hai **JSX Transformer**, jo JSX code ko convert karta hai **normal JavaScript** mein — jisme `React.createElement()` jaisa code hota hai.
- Matlab aapka phone ya compiler kabhi JSX directly nahi dekhta — wo hamesha **converted (transpiled)** JavaScript code hi use karta hai.

---

### 🔁 JSX ke fayde:

1. **Readable code** – HTML jaise lagta hai, easy to understand.
2. **JavaScript power** – Aap variables, conditions (`if`), loops (`map`, `for`) sab use kar sakte ho JSX ke andar.
3. **Nested components easy** – JSX mein nesting clean lagti hai, bina JSX ke toh code ka jungle ban jaata hai.

---

### 🧠 Recap in simple words:

> JSX ek **React Native ka tarika hai UI likhne ka**, jisme hum HTML jaisa code likhte hain JavaScript file ke andar. Yeh code readable hota hai, aur build ke time pe automatically convert ho jaata hai plain JavaScript mein.

---

Agar tujhse koi pooche:

**"JSX kya hota hai React Native mein?"**  
To tu simple bol sakta hai:

> "JSX ek special tarika hai JavaScript mein UI likhne ka, jisme HTML jaise tags use karte hain React Native ke components ke liye — jaise `<Text>`, `<View>` etc. Yeh code readable hota hai aur baad mein convert ho jaata hai normal JavaScript mein."






Bilkul! Chalo is video ka explanation bhi **Hinglish** mein karte hain, **layman language** mein — step by step jaise teacher student ko samjhata hai:

---

## 📱 **Hello World App ke Setup ka Matlab kya hai?**

Ab tak humne ek chhota Hello World app banaya React Native mein. Ab samjhte hain ki isme kya kya important cheezein ho rahi hain **behind the scenes**.

---

### 🔹 1. `import React from 'react';` kyun likhna padta hai?

React Native actually **React** ke upar hi bana hua hai. Toh jab bhi tum koi **screen ya component** banaoge (jaise `App.js`), tumhe sabse pehle React ko import karna padta hai.

👉 Ye line:
```js
import React from 'react';
```
iska matlab hai ki **core React library** ko project mein use karne ke liye le aaye ho.

🧠 **React kya deta hai?**  
- Components banane ka tarika
- State handle karne ke tools
- React ke core features

❗ Agar ye line hata doge, toh app chal hi nahi payega — kyunki tum React ke core features ko use hi nahi kar paoge.

---

### 🔹 2. `import { SafeAreaView, Text } from 'react-native';` ka matlab?

Ab yeh dono cheezein React Native ke components hain:

#### ✅ `Text`:
- Naam se hi samajh aa raha hai — screen pe **text dikhane ke liye** use hota hai.
  
#### 🛡️ `SafeAreaView`:
- Yeh **ek protective wrapper** jaisa hai.
- Ye ensure karta hai ki tumhara content phone ke **status bar**, **notch**, **WiFi signal**, **battery**, **home indicator** ke peeche chhup na jaaye.

### 🤔 Agar SafeAreaView hata dein toh?

- Android pe shayad koi dikkat na ho.
- **Lekin iOS pe text chala jaata hai status bar ke peeche!**  
  Jaise "Hello World" notch ke andar ghus jaata hai — jo bad design hai.

---

### 🔐 SafeAreaView ka kaam:

> SafeAreaView ensure karta hai ki tumhara app ka content **sirf safe zone** mein hi dikhaye — na ki aise jagah jahan user kuch dekh hi na paaye ya phone ka UI content ke upar aa jaye.

✅ Isse tumhara app **har device pe clean aur professional** dikhega — chhoti screen ho ya iPhone notch wala screen.

---

### 📦 Recap (simple words mein):

| Term | Explanation |
|------|-------------|
| `React` import | React Native ka base engine hai — bina iske kuch bhi nahi chalega |
| `Text` | Screen pe text dikhane ke liye |
| `SafeAreaView` | Content ko device ke safe zone ke andar rakhne ke liye, notch ya status bar ke peeche chhupne se bachata hai |

---

Agar koi tujhse poochhe:
> "React Native mein SafeAreaView ka kya kaam hota hai?"

Tu bol sakta hai:
> "Wo ek wrapper hota hai jo ensure karta hai ki app ka content phone ke status bar ya notch ke peeche na chhup jaye — khas kar iOS phones mein."


Bilkul! Chalo is video ka summary **Hinglish** mein karte hain — ekdum simple aur layman language mein, taaki concept clearly samajh aaye:

---

## 🟨 **JavaScript Overview — Ek Chhoti Si Summary**

### 📌 1. **JavaScript kya hota hai?**

JavaScript ek **widely used programming language** hai jo:
- Web browsers mein chalta hai (jaise Chrome, Firefox)
- Aur ab NodeJS ke through server ya computer pe bhi chal sakta hai

---

### 🔸 2. **Weakly-Typed Language ka matlab?**

JavaScript **weakly-typed** hai, iska matlab:

➡️ Tumhe variable ka type batana **zaroori nahi** hota.

```js
let x = 5;        // number
x = "hello";      // ab x string ho gaya
```

❗ Matlab: Type runtime pe bhi change ho sakta hai.  
✅ Flexibility milti hai  
⚠️ Lekin galtiyan bhi ho sakti hain, toh **careful rehna padta hai**

---

### 🔹 3. **TypeScript kya hota hai?**

- TypeScript ek **advanced version** hai JavaScript ka jisme type define karne padte hain.
- Ye zyada **safe aur predictable** coding ke liye hota hai.
- Lekin abhi hum sirf **JavaScript** pe focus karenge — pehle basics strong hone chahiye.

---

### 🔸 4. **Object-Oriented Programming (OOP) in JavaScript**

JavaScript mein tum data ko **objects** ke form mein organize kar sakte ho.

🔹 Object ke andar hoti hain:
- **Properties** (data)  
- **Methods** (functions jo object pe kaam karte hain)

Ye approach coding ko:
✅ Zyada organized  
✅ Zyada reusable banata hai

---

### 🔹 5. **Primitive vs Reference Types**

Ye ek **important topic** hai jo har JavaScript interview mein aata hai.

🟢 Primitive Types – simple data jaise:
- `string`, `number`, `boolean`, `null`, `undefined`, `symbol`

🟠 Reference Types – complex data jaise:
- `object`, `array`, `function`

Ye hum **next video mein detail** mein padhenge.

---

### 🟢 6. **JavaScript Sirf Browser Tak Simit Nahi Hai**

Pehle JavaScript **sirf browsers** ke liye tha.

Lekin ab:
- NodeJS ke through JavaScript ka use **server-side** pe bhi hota hai.
- Tum **web server**, **file system**, **databases**, etc. ke saath kaam kar sakte ho.

---

### 📦 Final Summary (Simple Words):

> JavaScript ek flexible aur powerful language hai jo browser aur server dono jagah chal sakti hai. Type define karna optional hai, aur isme object-oriented concepts bhi hote hain. Aage chal ke hum TypeScript aur NodeJS bhi dekhenge, lekin pehle JavaScript ko achhi tarah samajhna zaroori hai.

Great! Chalo is JavaScript intro video ka **Hinglish + layman language** mein breakdown karte hain — taaki easily samajh aa jaaye without technical jargon:

---

## 🟦 **JavaScript Basics – Ek Fun Project ke Saath Start**

### 📁 Step 1: Setup

- Apne computer mein ek **naya khaali folder** banao.
- Apna favourite IDE open karo (VS Code ya WebStorm).
- Ek nayi file banao, naam kuch bhi ho sakta hai (e.g., `play.js`).

---

## 🔸 JavaScript Basics Review

### 🧮 1. **Variables – Data ko Store Karne ke Containers**

JavaScript mein variable banane ke liye `var` keyword use hota hai:

```js
var name = "Nata";
```

Ab agar hum `console.log(name);` karein, toh output hoga:  
```
Nata
```

Aur dusre data types bhi ho sakte hain:

```js
var age = 26;
var hasHobbies = true;
```

---

### 🔧 2. **Functions – Reusable Code Blocks**

Function banate waqt:

```js
function whoIsUser(name, age) {
  return "Name is " + name + " and age is " + age;
}
```

Call karne ke liye:

```js
console.log(whoIsUser(name, age));
```

➡️ Output hoga:  
```
Name is Nata and age is 26
```

✅ Functions mein **arguments** pass kar sakte ho (name, age).  
✅ Function ke andar kuch bhi return ya print kar sakte ho.

---

## 🔒 3. **Scope – Variable Kahaan Se Accessible Hai?**

### 🟠 Local Scope:

Agar variable **function ke andar banaya hai**, toh woh **bahar se accessible nahi hota**.

```js
function test() {
  var localVar = "I am local";
}
console.log(localVar); // ❌ Error: not defined
```

### 🟢 Global Scope:

Agar variable function ke **bahar banaya hai**, toh woh **function ke andar bhi use ho sakta hai**.

```js
var globalVar = "I am global";

function show() {
  console.log(globalVar); // ✅ Works
}
```

---

## ✅ Final Takeaway:

- `var` se variables banate hain  
- `function` se reusable code likhte hain  
- Functions ke andar arguments pass kar sakte ho  
- Scope samajhna zaroori hai: **local vs global**

Bilkul! Yeh video **next-gen JavaScript syntax** ke basics ke baare mein tha — chalo use **Hinglish + layman language** mein samajhte hain 👇

---

## 🔹 **`var` vs `let` vs `const`** – Kya Fark Hai?

### ❌ `var` (Old Style)

- Purane zamane ka syntax hai
- Global ya function scope hota hai (confusing ho sakta hai)
- **Avoid karna chahiye ab**

---

### ✅ `let` (Naya Style)

- Jab variable ka value change hone wala ho future mein
- **Block scope** hota hai (matlab `{ }` ke andar hi kaam karta hai)
  
```js
let age = 25;
age = 26; // ✅ allowed
```

---

### ✅ `const` (Fixed Value)

- Jab value **kabhi change nahi** honi chahiye
- **Block scope** same jaise let
- Agar aap change karne ki koshish karoge ➡️ **error milega**

```js
const name = "Nata";
name = "Full Name"; // ❌ error: Assignment to constant variable
```

---

## 🧠 **Short Summary – Difference Table**

| Keyword | Can Reassign? | Scope Type | Use When? |
|--------|---------------|------------|-----------|
| `var`  | Yes           | Function   | **Avoid** karna chahiye |
| `let`  | Yes           | Block      | Jab value change ho sakti ho |
| `const`| ❌ No          | Block      | Jab value fix ho (never change) |

---

## 📝 Tip:
👉 Apne code ko **clear aur safe** rakhne ke liye:
- `const` use karo by default
- `let` use karo jab zarurat ho value badalne ki
- `var` bhool jao! 😄



Sure! Here's a **short and simple explanation of Arrow Functions in Hinglish**:

---

### 🔹 **Arrow Function (=>) – Short Note (Hinglish)**

Arrow function JavaScript ka **short and modern** way hai function likhne ka.

### ✅ Syntax:
```js
const add = (a, b) => {
  return a + b;
};
```

---

### 🟡 Benefits:
- **Shorter syntax** (chhoti aur clean writing)
- `this` keyword ko **lexically** handle karta hai (iska matlab arrow function ka `this` outer scope se aata hai)

---

### ✅ One-liner return (jab sirf ek line ho):
```js
const square = n => n * n;
```

---

### 🔁 Traditional vs Arrow:

```js
// Traditional function
function greet(name) {
  return "Hello " + name;
}

// Arrow function
const greet = name => "Hello " + name;
```

---

### 📝 Tip:
Agar function ke andar `this` ka use ho, toh arrow function carefully use karo.



Great observation! Yeh confusion **bohot common hai**, so let’s clear it up with **crystal clear Hinglish explanation** 👇

---

### 🔄 **Rest vs Spread – Main Difference**

**Rest = Collect karna**  
**Spread = Baantna / Phelana**

Dono same `...` syntax use karte hain, **lekin context alag hota hai**. Let's understand by **real-world examples**:

---

### 🧺 REST Operator – "Jama Karna" (Collect)
```js
function myFunc(...args) {
  console.log(args);
}
myFunc(1, 2, 3);
// Output: [1, 2, 3]
```

👉 Yahaan `...args` REST hai → jitne bhi arguments aaye, sabko **ek array** me **jama** kar diya.

---

### 📤 SPREAD Operator – "Phelana / Baantna" (Distribute)
```js
const arr = [1, 2, 3];
const newArr = [...arr, 4, 5];
// Output: [1, 2, 3, 4, 5]
```

👉 Yahaan `...arr` SPREAD hai → array ke items ko **baant diya** (expand kiya) aur ek **naya array** banaya.

---

### 🔍 WHY WE NEED SPREAD?

✅ **Rest** sirf **functions ke arguments** me kaam karta hai (collect karne ke liye).  
✅ **Spread** ka use hota hai **copy banane, merge karne, aur expand karne** ke liye.

---

### 🧠 Ek Simple Rule yaad rakho:

| Situation                          | Use |
|-----------------------------------|-----|
| Function ke andar values collect karni ho | `REST` |
| Array ya object ko copy / merge / expand karna ho | `SPREAD` |

---

### 🎯 Why not just use REST everywhere?

❌ REST ka kaam sirf **values collect karna** hai, woh **direct copy ya spread** nahi karta arrays ya objects ko.

✅ SPREAD se hum values ko "unpack" kar sakte hain aur naya object/array bana sakte hain — jisse hum **immutability** follow karte hain (specially in React).

---

### 👇 Bonus Real-Life Example in React:

```js
const [user, setUser] = useState({ name: "John", age: 25 });

// ❌ Wrong: mutating state directly
user.age = 26;

// ✅ Correct: using SPREAD
setUser({ ...user, age: 26 });
```


Bhai tujhko short, simple aur clear theory chahiye na? Toh sun – main sab kuch **Hinglish mein** explain karta hoon, real-life example ke saath 💡

---

### ✅ **1. Promise – Ek Wada!**

> "Promise ek object hai jo future mein success ya failure ka result dene wala hai."

```js
const promise = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("Data mil gaya");
  } else {
    reject("Error aaya");
  }
});
```

- `resolve()` – kaam sahi hua ✅  
- `reject()` – kuch error aayi ❌  
- Iska result baad mein milta hai (asynchronous)

---

### ✅ **2. fetch() – Data lene ka tareeka**

> "fetch ek function hai jo server se data laata hai (HTTP request bhejta hai) aur Promise return karta hai."

```js
fetch("https://api.example.com/data")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
```

- Ye mostly API se data mangwane ke liye use hota hai  
- Ye hamesha **Promise return** karta hai

---

### ✅ **3. async & await – Aasaan tariqa Promise handle karne ka**

> "async functions ke andar hum `await` ka use kar ke Promise ka result easily wait karke le sakte hain."

```js
async function getData() {
  try {
    const res = await fetch("https://api.example.com/data");
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log("Error:", error);
  }
}
getData();
```

#### 🔁 Compare karo:
- `.then().catch()` → purana tareeka
- `async/await` → naya, clean, readable

---

### 🧠 Summary Note (Super Short)

| Concept       | Meaning (Hinglish)                                        |
|---------------|------------------------------------------------------------|
| **Promise**   | Future ka wada – success (resolve) ya fail (reject)        |
| **fetch()**   | API se data lene wala function – Promise return karta hai  |
| **async**     | Function jo promise ko await kar sakta hai                 |
| **await**     | Promise ka result ka wait karo (pause)                     |

---


Here’s a **short theory note in Hinglish** with clear **differences** between `Promise`, `fetch()`, `async`, and `await`:

---

### 📒 **Short Note: JavaScript Async Concepts**

#### 🔹 **1. Promise**
- Future mein result dene wala object hota hai.
- 3 states: `pending`, `fulfilled`, `rejected`
- Use: `.then()` & `.catch()` se handle karte hain.

#### 🔹 **2. fetch()**
- Server/API se data fetch karne ke liye use hota hai.
- Automatically ek `Promise` return karta hai.

#### 🔹 **3. async**
- Ek function ko `Promise`-based banata hai.
- Iske andar `await` use kar sakte ho.

#### 🔹 **4. await**
- Kisi `Promise` ka result aane tak wait karta hai.
- Sirf `async` function ke andar hi use hota hai.

---

### 🆚 Differences:

| Feature      | Description (Hinglish)                                       |
|--------------|---------------------------------------------------------------|
| `Promise`    | Future ka result hold karta hai (pending, resolve, reject)    |
| `fetch()`    | Data mangwata hai server/API se, aur Promise return karta hai |
| `async`      | Function ko Promise-compatible banata hai                     |
| `await`      | Promise ka result aane tak wait karta hai (pause like feel)   |

---

### ✅ Example Recap:

```js
async function getData() {
  const res = await fetch('https://api.com/data');
  const data = await res.json();
  console.log(data);
}
```

➡️ Ismein:
- `fetch()` ne data manga (Promise diya),
- `await` ne uska result ka wait kiya,
- `async` function ne allow kiya `await` ka use.


Bilkul! Chalo ab hum `useRef` hook ko React Native mein detail mein aur ekdum simple, layman language aur Hinglish mein samajhte hain.

---

### 🔍 **What is useRef in React Native?**

`useRef` ek React ka special hook hai jo aapko **reference** (yaani ek direct connection) deta hai kisi DOM node ya component ke saath. Ye reference app ke re-renders ke beech bhi **same hi rehta hai** — woh value change nahi hoti jab tak aap manually na karo.

---

### 🔧 **useRef Kyu Use Karte Hain?**

1. **DOM ya Native Component ko directly access karna ho**  
   Jaise agar aapko kisi component ke andar scroll karna ho, ya kisi view ko focus ya animate karna ho — tab useRef kaam aata hai.

2. **Aisi value store karne ke liye jo re-render pe lost na ho**  
   useState se value change hone pe component re-render hota hai. Par agar aapko aisi koi value store karni hai jise re-render pe nahi badalna, tab bhi useRef ka use hota hai.

---

### 🧠 **Example Samjho - Scroll to Top Button**

Soch lo ek screen hai jisme 1000 "Hello World" likhe hue hain ScrollView ke andar. Ab aap chahte ho ki ek button dabane par ScrollView top par chala jaye.

#### Without useRef ❌:
Aap ScrollView ke andar scrollTo function ko access nahi kar paoge, kyunki woh React Native ke normal props mein available nahi hota.

#### With useRef ✅:
Aap `useRef()` se ScrollView ka reference create karoge, usko `ref` prop ke through ScrollView mein pass karoge.

```js
const scrollViewRef = useRef(null);

// ScrollView mein lagao
<ScrollView ref={scrollViewRef}>
```

Ab jab button dabega, aap yeh likhoge:

```js
scrollViewRef.current.scrollTo({ y: 0, animated: true });
```

Yahan `scrollTo()` function ScrollView ke andar ka ek **native method** hai, jo aap tabhi use kar sakte ho jab aapke paas uska direct reference ho — jo ki useRef deta hai.

---

### 🔁 Step-by-Step Flow:

1. `const scrollViewRef = useRef(null);` – reference banaya
2. `<ScrollView ref={scrollViewRef}>` – ScrollView ko yeh reference diya
3. Button press hone par `scrollViewRef.current.scrollTo({ y: 0, animated: true })` – DOM ko directly command diya ke upar scroll ho jao

---

### 💡 Important Point:

- `useRef.current` pe jo value hoti hai, woh tab milti hai jab component render ho chuka hota hai.
- Iska koi re-render trigger nahi hota jab aap `current` value change karte ho.
- Yeh React Native mein especially kaam aata hai jab aapko kisi UI element se **direct interact karna ho**, jaise animations, focus, scroll, etc.

---

### 🔚 Final Line:

`useRef` React Native mein ek powerful tool hai jab aapko kisi **native feature** ko handle karna hota hai jo normal props se accessible nahi hota. Jaise ScrollView ka scrollTo function.

