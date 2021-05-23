# IoT Lab KIIT Official Website

---

## Getting Started

For safety, clone only the `develop` branch using

```bash
git clone -b develop --single-branch https://github.com/iot-lab-kiit/iotkiit.git
```

Then, run the development server:

```bash
npm install
npm run dev
# or
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## Tech Stack

This website follows the `JAMstack` ideology and is built using

> Next.JS (JavaScript)
> 
> Tailwind CSS (Utility-First CSS Framework)
>
> Strapi (Headless CMS)

---

## Deployment

The website is deployed at [https://iotkiit.in](https://iotkiit.in) via a dockerised image served through `dockerhub` on a virtual server with _Strapi_ for **CMS** and _Caddy_ for **Reverse Proxy**.

DNS services are handled through `Cloudflare`.

The staging website is deployed on _Netlify_ which also build **branch preview** for `develop` branch and **deploy previews** for any _Pull Requests_ against `develop` and `staging` branches.

> `staging branch` can be accessed via [this link](https://staging.iotkiit.in).

> `deploy previews` can be accessed via links added as comments in the PR raised.

---

## Working with the repository

Adding any changes to the code will require checking out a `feature-branch` from `develop` and then raising a **Pull Request** with [@RKRohk](https://github.com/Rkrohk) and [@SahilKr24](https://github.com/SahilKr24) added as **reviewers**.

Upon passing all the required checks and verifying changes via the _deploy preview_ url, the PR will be `squashed and merged` into the `develop` branch and then deleted.

>**NOTE** : PRs WILL REQUIRE ATLEAST ONE CODE REVIEW APPROVAL AND SHOULD NOT BE MERGED BY THE CONTRIBUTOR THEMSELVES.

We will follow the following flow of commits:

**`feature-branch`** →  _squash and merge_ → **`develop`** → _cherry-pick_ → **`staging`** → _fast-forward merge_ → **`main`**

All pushes to the `staging` branch will be verified and tested during the `staging` phase, and if no bugs/issues are found, then only the changes will be propogated to the `main` branch.

Once the commits are on the `main` branch, GitHub actions will push the code into the CI/CD pipeline, after which the changes will propogate to the main URL. 

Any push to the `main` branch will trigger a deploy resulting in updates directly on the main URL.

>**NOTE** : NO DIRECT PUSH TO THE MAIN BRANCH. IN CASE OF EMERGENCY REACH OUT TO

- [@RKRohk](https://github.com/Rkrohk)
- [@SahilKr24](https://github.com/SahilKr24)

