
```
velora-store
├─ docs
├─ ecommerce-back
│  ├─ db.json
│  ├─ package-lock.json
│  └─ package.json
├─ ecommerce-front
│  ├─ eslint.config.js
│  ├─ index.html
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ public
│  │  ├─ favicon.svg
│  │  └─ icons.svg
│  ├─ README.md
│  ├─ src
│  │  ├─ assets
│  │  │  └─ svg
│  │  │     ├─ cart.svg
│  │  │     ├─ like-fill.svg
│  │  │     ├─ like.svg
│  │  │     └─ wishlist.svg
│  │  ├─ components
│  │  │  ├─ common
│  │  │  │  ├─ Footer
│  │  │  │  │  ├─ Footer.tsx
│  │  │  │  │  └─ styles.module.css
│  │  │  │  ├─ GridList
│  │  │  │  │  └─ GridList.tsx
│  │  │  │  ├─ Header
│  │  │  │  │  ├─ Header.tsx
│  │  │  │  │  ├─ HeaderCounter
│  │  │  │  │  │  ├─ HeaderCounter.tsx
│  │  │  │  │  │  └─ styles.module.css
│  │  │  │  │  ├─ HeaderLeftBar
│  │  │  │  │  │  ├─ HeaderLeftBar.tsx
│  │  │  │  │  │  └─ styles.module.css
│  │  │  │  │  ├─ index.ts
│  │  │  │  │  └─ styles.module.css
│  │  │  │  ├─ Heading
│  │  │  │  │  ├─ Heading.tsx
│  │  │  │  │  └─ styles.module.css
│  │  │  │  └─ index.ts
│  │  │  ├─ ecommerce
│  │  │  │  ├─ CartItem
│  │  │  │  │  ├─ CartItem.tsx
│  │  │  │  │  └─ styles.module.css
│  │  │  │  ├─ CartItemList
│  │  │  │  │  └─ CartItemList.tsx
│  │  │  │  ├─ CartSubtotalPrice
│  │  │  │  │  ├─ CartSubtotalPrice.tsx
│  │  │  │  │  └─ styles.module.css
│  │  │  │  ├─ Category
│  │  │  │  │  ├─ Category.tsx
│  │  │  │  │  └─ styles.module.css
│  │  │  │  ├─ index.ts
│  │  │  │  └─ Product
│  │  │  │     ├─ Product.tsx
│  │  │  │     └─ styles.module.css
│  │  │  ├─ feedback
│  │  │  │  ├─ index.ts
│  │  │  │  └─ Loading
│  │  │  │     └─ Loading.tsx
│  │  │  └─ forms
│  │  ├─ hooks
│  │  ├─ layouts
│  │  │  ├─ index.ts
│  │  │  ├─ MainLayout
│  │  │  │  ├─ MainLayout.tsx
│  │  │  │  └─ styles.module.css
│  │  │  └─ ProfileLayout
│  │  ├─ main.tsx
│  │  ├─ pages
│  │  │  ├─ AboutUs.tsx
│  │  │  ├─ Cart.tsx
│  │  │  ├─ Categories.tsx
│  │  │  ├─ Error.tsx
│  │  │  ├─ Home.module.css
│  │  │  ├─ Home.tsx
│  │  │  ├─ Login.tsx
│  │  │  ├─ Products.tsx
│  │  │  ├─ Register.tsx
│  │  │  └─ Wishlist.tsx
│  │  ├─ routes
│  │  │  └─ AppRouter.tsx
│  │  ├─ services
│  │  │  └─ axios-global.ts
│  │  ├─ store
│  │  │  ├─ cart
│  │  │  │  ├─ act
│  │  │  │  │  └─ actGetProductsByItems.ts
│  │  │  │  ├─ cartSlice.ts
│  │  │  │  └─ selectors
│  │  │  │     └─ index.ts
│  │  │  ├─ categories
│  │  │  │  ├─ act
│  │  │  │  │  └─ actGetCategories.ts
│  │  │  │  └─ categoriesSlice.ts
│  │  │  ├─ hooks.ts
│  │  │  ├─ index.ts
│  │  │  ├─ products
│  │  │  │  ├─ act
│  │  │  │  │  └─ actGetProductsByCatPrefix.ts
│  │  │  │  └─ productsSlice.ts
│  │  │  └─ wishlist
│  │  │     ├─ act
│  │  │     │  ├─ actGetWishlist.ts
│  │  │     │  └─ actLikeToggle.ts
│  │  │     └─ wishlistSlice.ts
│  │  ├─ styles
│  │  │  └─ global.css
│  │  ├─ types
│  │  │  ├─ category.ts
│  │  │  ├─ product.ts
│  │  │  └─ shared.ts
│  │  └─ utilities
│  ├─ tsconfig.app.json
│  ├─ tsconfig.json
│  ├─ tsconfig.node.json
│  └─ vite.config.ts
├─ package-lock.json
├─ package.json
└─ README.md

```