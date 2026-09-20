# ecome-fe

Frontend marketplace đa nhà bán hàng cho buyer và seller, xây dựng bằng Next.js App Router, React và TypeScript.

## Tooling bắt buộc

- PNPM 10.15.0 là package manager duy nhất.
- Bun 1.4.2 là runtime/script runner cho local development.
- Dependency source of truth: `package.json` và `pnpm-lock.yaml`.
- Không tạo hoặc sử dụng `package-lock.json`, `yarn.lock`, `bun.lock` hay `bun.lockb`.

## Chạy local

```powershell
corepack pnpm install
bun run dev
```

Trong terminal đã expose Bun trên `PATH`, các lệnh chuẩn là:

```powershell
bun run typecheck
bun run lint
bun run build
```

## Kiến trúc

- `src/app/(store)`: buyer storefront, catalog, product, cart và checkout.
- `src/app/account`: profile, address, wishlist và order tracking.
- `src/app/seller`: seller dashboard, product management, orders, revenue và shop settings.
- `src/components`: UI primitives, layout và reusable marketplace components.
- `src/features/cart`: cart state với localStorage persistence, sẵn sàng thay bằng API.
- `src/lib/mock-data.ts`: mock domain data cho trải nghiệm MVP; có thể thay bằng REST service mà không đổi UI flow.

## Routes chính

`/`, `/products`, `/search`, `/category/[slug]`, `/product/[slug]`, `/shop/[slug]`, `/cart`, `/checkout`, `/account/*`, `/seller/*`, `/login`, `/register`.
