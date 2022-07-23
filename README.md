
# Flip Transaction

An app to view transactions.
## Run Locally

Clone the project

```bash
  git clone https://github.com/aurisz/flip-transaction.git
```

Go to the project directory

```bash
  cd flip-transaction
```

Install dependencies

```bash
  yarn
```

Start the app (Android)

```bash
  yarn run android
```

Start the app (iOS)

```bash
  yarn run ios
```
## Features

- Filter transactions by
    - name
    - sender bank
    - beneficiary bank
    - transaction amount
- Sort transactions by
    - name (A - Z)
    - name (Z - A)
    - date newest
    - date oldest
- Pull to Refresh
- Copy Transaction ID to clipboard
## Optimizations

- Debounced search input to prevent unnecessary re-renders
- Add module resolver to help tidy up relative imports
- Using [Jotai](https://jotai.org/) as minimal state management library
- Using `FlatList` instead `ScrollView` help with performance when rendering large amounts of data
