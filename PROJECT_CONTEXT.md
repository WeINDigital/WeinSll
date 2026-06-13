# PROJECT_CONTEXT.md — Wensll (React Native Sales App)

## App Overview

A React Native sales-force management app targeting Android and iOS. It covers the full salesman workflow: login → create invoices (with barcode scanning) → manage clients → request discounts → view receipts → track collections and inventory → log client visits.

---

## App Architecture

**Pattern:** Atomic Design — components are layered as `atoms → molecules → organisms → templates`, then consumed by `screens`.

**Layer responsibilities:**

| Layer | Role |
|---|---|
| `atoms` | Primitive, stateless UI building blocks (Button, Input, Text, SvgView, etc.) |
| `molecules` | Composed atoms forming a feature unit (OTPInput, PersonCard, ReceiptCard, etc.) |
| `organisms` | Complex, business-logic-aware compositions (LoginForm, CreateInvoiceForm, HomeMenu, etc.) |
| `templates` | Full-page layout wrappers consumed by screens (AuthTemplate, CreateInvoiceTemplate, etc.) |
| `screens` | Route-level components that own state and wire navigation |

**Key design decisions:**
- All headers, back buttons, and bottom CTAs are handled by `AuthTemplate` (the main screen wrapper). Every screen that needs a header uses this template.
- `MainTemplate` is a simpler padded container used for basic page structure.
- The `AuthTemplate` accepts `bottomTitle`, `cancelBottomTitle`, and `firstBottomTitle` for flexible 1- or 2-button footer configurations.

---

## Folder Structure

```
src/
├── App.tsx                        # Root — wraps with AuthProvider, renders RootNavigator
├── assets/
│   ├── images/components/         # All SVG icons + one PNG (clintImage.png)
│   └── index.ts                   # Asset barrel export
├── components/
│   ├── atoms/                     # ~24 primitive components
│   ├── molecules/                 # ~27 composed components
│   ├── organisms/                 # ~19 form/section components
│   ├── templates/                 # ~19 full-page layout wrappers
│   └── index.ts                   # Single barrel re-export for all components
├── context/
│   ├── AuthContext.tsx             # Auth state (isLoggedIn, role, login, logout)
│   └── ClientsContext.tsx          # Client CRUD state (in-memory, seeded with 3 records)
├── data/
│   └── index.ts                   # Static mock data (dashboardData, paymentTypeData, amountData)
├── navigation/
│   ├── RootNavigator.tsx           # Chooses AuthNavigator or AppNavigator based on auth
│   ├── AuthNavigator.tsx           # Login → ForgotPassword → ResetCode → NewPassword
│   ├── AppNavigator.tsx            # All authenticated screens (20 screens)
│   ├── routes.ts                   # Route name constants
│   └── types.ts                   # Stack param list types (partially filled)
├── screens/
│   ├── auth/                       # Login, ForgotPassword, ResetCode, NewPassword
│   ├── CameraScreen/               # Barcode scanning via VisionCamera
│   ├── collections/                # Collections list with date picker
│   ├── common/
│   │   ├── Home/                   # Role-dispatching Home + SalesHome/ManagerHome/SupervisorHome
│   │   ├── clients/                # Clients list, AddClient, EditClient, ClientDetails
│   │   ├── Profile.tsx
│   │   └── Settings.tsx
│   ├── confirmInvoice/             # Invoice review/confirmation
│   ├── createDiscounts/            # Discount request form
│   ├── createInvoice/              # Invoice creation with items + payment type
│   ├── discounts/                  # Discounts list, DiscountDetails
│   ├── inventory/                  # Inventory table view
│   ├── receipts/                   # ReceiptsCenter list, ReceiptDetails
│   └── visitForum/                 # Visit log list, VisitDetails, AddVisit
├── services/
│   └── discounts.ts                # requestDiscount() — MOCK (simulate 600 ms delay)
├── types/
│   ├── api.ts                      # ApiResponse<T>, PaginatedResponse<T>
│   ├── domain.ts                   # User, AuthState, Invoice, InvoiceItem, Discount
│   ├── store.ts                    # (placeholder)
│   └── index.ts                    # Barrel
└── utils/
    ├── dimensions.ts               # wp(), hp(), fs(), sp() — scaled from 375×812 base
    └── HelperFuncations.ts         # formatDate(), getClientValueStyle(), getClientFormattedValue()
```

---

## Dependencies

### Runtime

| Package | Version | Purpose |
|---|---|---|
| `react` | 19.2.0 | UI framework |
| `react-native` | 0.83.1 | Native platform layer |
| `@react-navigation/native` | ^7.1.28 | Navigation container |
| `@react-navigation/native-stack` | ^7.10.1 | Stack navigator |
| `@react-navigation/elements` | ^2.9.5 | Navigation UI primitives |
| `react-native-safe-area-context` | ^5.6.2 | Safe area insets |
| `react-native-screens` | ^4.20.0 | Native screen containers |
| `react-native-svg` | ^15.15.1 | SVG rendering |
| `react-native-svg-transformer` | ^1.5.2 | Import `.svg` files as components |
| `react-native-vision-camera` | ^4.7.3 | Barcode/camera scanning |
| `react-native-image-picker` | ^8.2.1 | Photo picking |
| `@react-native-community/datetimepicker` | ^8.6.0 | Date picker (used in DatePickerField / DateInputAtom) |

### Dev

| Package | Purpose |
|---|---|
| `typescript` ^5.8.3 | Type checking |
| `babel-plugin-module-resolver` ^5.0.3 | `@src` path alias |
| `@react-native/metro-config` | Metro bundler config base |
| `eslint` + `@react-native/eslint-config` | Linting |
| `prettier` 2.8.8 | Formatting (single quotes, trailing commas, no arrow parens) |
| `jest` + `@types/jest` | Testing |

---

## Navigation Flow

```
App
└── AuthProvider
    └── NavigationContainer (RootNavigator)
        ├── [unauthenticated] AuthNavigator (NativeStack, no header)
        │   ├── Login          ← default screen
        │   ├── ForgotPassword
        │   ├── ResetCode
        │   └── NewPassword
        │
        └── [authenticated] AppNavigator (NativeStack, no header)
            ├── Home           ← default screen (dispatches to SalesHome / SupervisorHome / ManagerHome)
            ├── Profile
            ├── Settings
            ├── CreateInvoice  ← receives optional barcode param from CameraScreen
            ├── CameraScreen   ← returns barcode via navigation params
            ├── ConfirmInvoice ← receives items, paymentType, amounts, collectionDate
            ├── Discounts
            ├── CreateDiscounts← receives optional clientId param
            ├── DiscountDetails← receives discount object
            ├── Clients
            ├── AddClient
            ├── EditClient     ← receives client object
            ├── ClientDetails  ← receives client object
            ├── ReceiptsCenter
            ├── ReceiptDetails ← receives receipt object
            ├── Collections
            ├── Inventory
            ├── VisitForum
            ├── VisitDetails   ← receives visit object
            └── AddVisit
```

All screens use `headerShown: false`; headers are rendered manually inside templates via `HeaderWithBack`.

**Android back button on Home:** `useFocusEffect` + `BackHandler` exits the app instead of going back.

---

## State Management

**Pattern:** React Context API only — no Redux, Zustand, or other store library.

### AuthContext (`src/context/AuthContext.tsx`)

```ts
{ isLoggedIn: boolean; role: UserRole | null; login(role): void; logout(): void }
```

- `UserRole` = `'salesman' | 'supervisor' | 'manager'`
- On login, role determines which Home variant is rendered
- State is in-memory only — no persistence (AsyncStorage, SecureStore, etc.)

### ClientsContext (`src/context/ClientsContext.tsx`)

```ts
{ clients: Client[]; addClient(data): void; updateClient(id, data): void }
```

- Seeded with 3 hardcoded clients
- The `Clients` screen currently uses its own local `CLIENTS_DATA` constant instead of this context — context is wired but **not yet consumed** by the Clients screen

---

## API Integrations

**Status: all mock — no real backend calls exist yet.**

### `src/services/discounts.ts`

```ts
requestDiscount(payload: DiscountRequest): Promise<DiscountResponse>
```

- Simulates a 600 ms network delay with `setTimeout`
- Returns a `DiscountResponse` with a computed `status`:
  - `'Rejected'` if `reason` is empty, or `paymentType === 'Other'` with no `otherReason`
  - `'Approved'` if `totalAmount > 1000`
  - `'In Progress'` otherwise
- Comment in the file: _"Mock API: replace with real network call later"_

All other screens use hardcoded `MOCK_*` constants inline.

---

## Environment Configuration

- **No `.env` files** exist in the project — no environment variables are currently used
- **Base device dimensions:** `375 × 812` (iPhone X reference). All `wp()`, `hp()`, `fs()`, `sp()` scale from this base
- **Path alias:** `@src` maps to `./src/` — configured in both `babel.config.js` (module-resolver plugin) and `tsconfig.json` (`paths`)

---

## Build Configuration

### Metro (`metro.config.js`)

- SVG transformer: `react-native-svg-transformer` is inserted as the Babel transformer so `.svg` files can be imported as React components
- `.svg` is removed from `assetExts` and added to `sourceExts`

### Babel (`babel.config.js`)

- Preset: `@react-native/babel-preset`
- Plugin: `module-resolver` with root `./src` and alias `@src`

### TypeScript (`tsconfig.json`)

- Extends `@react-native/typescript-config`
- `baseUrl: "."`, `paths: { "@src/*": ["src/*"] }`
- Includes all `*.ts` / `*.tsx`, excludes `node_modules` and `Pods`

### Android

- Targets `arm64-v8a` + `armeabi-v7a`
- Uses Gradle 9.0, CMake for native modules (VisionCamera, SafeAreaContext, RNScreens, RNSVG, DateTimePicker, ImagePicker)

### Scripts

```
npm run android   # react-native run-android
npm run ios       # react-native run-ios
npm run start     # react-native start (Metro)
npm run lint      # eslint .
npm run test      # jest
```

---

## Known Issues / Incomplete Work

1. **Login hardcodes role as `"salesman"`** — `LoginScreen.tsx` always calls `login("salesman")` regardless of credentials entered
2. **`ManagerHome` and `SupervisorHome` are stubs** — both render only a plain `<Text>` with their name; no real UI
3. **`Clients` screen does not use `ClientsContext`** — it has its own hardcoded `CLIENTS_DATA` constant; add/edit flows are wired to the template but the context is unused
4. **No auth persistence** — logging out clears state; re-opening the app sends the user back to Login
5. **All data is mock** — every list screen uses hardcoded `MOCK_*` arrays; no network calls exist except the simulated discount service
6. **`navigation/types.ts` is incomplete** — `AppStackParamList` only defines 6 screens out of the 20 registered in `AppNavigator`
7. **`REGISTER` route** exists in `routes.ts` but has no screen registered in any navigator
8. **`src/components/atoms/AuthContext/AuthContext.tsx` duplicates** the real context at `src/context/AuthContext.tsx` — two separate files; the atoms version is exported from the atoms barrel but the real one in `src/context/` is what's actually used
9. **`useNavigation<any>()`** is used pervasively — no typed navigation hooks wired up
10. **`console.log` / `console.warn` calls** remain in production paths (LoginScreen, HomeMenu onLogOut, HelperFuncations.ts)
