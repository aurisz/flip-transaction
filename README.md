
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


- Using [Jotai](https://jotai.org/) as minimal state management library
- Using `FlatList` instead `ScrollView` help with performance when rendering large amounts of data
- Enable [Hermes](https://reactnative.dev/docs/hermes) on Android for improved start-up time
- Debounced search input to prevent unnecessary re-renders
- Using `useMemo` to memoize conditional styling
- Add module resolver to help tidy up relative imports

## Screenshots

<table>
  <thead>
    <tr>
      <td>Android</td>
      <td>iOS</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <img src="screenshots/android/transaction_list_android.png" alt="list_android" width="300"/>
      </td>
      <td>
        <img src="screenshots/ios/transaction_list_ios.png" alt="list_ios" width="300"/>
      </td>
    </tr>
    <tr>
      <td>
        <img src="screenshots/android/transaction_filter_android.png" alt="filter_android" width="300"/>
      </td>
      <td>
        <img src="screenshots/ios/transaction_filter_ios.png" alt="filter_ios" width="300"/>
      </td>
    </tr>
    <tr>
      <td>
        <img src="screenshots/android/transaction_sort_android.png" alt="sort_android" width="300"/> 
      </td>
      <td>
        <img src="screenshots/ios/transaction_sort_ios.png" alt="sort_ios" width="300"/>
      </td>
    </tr>
    <tr>
      <td>
        <img src="screenshots/android/transaction_detail_android.png" alt="detail_android" width="300"/>
      </td>
      <td>
        <img src="screenshots/ios/transaction_detail_ios.png" alt="detail_ios" width="300"/>
      </td>
    </tr>
  </tbody>
</table>
