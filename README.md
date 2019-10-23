# Quasar typescript extension

This extension adds typescript support to a quasar project with minimum configuration

# Install

- Add extension to your dependencies:

```bash
npm install -D git+ssh://github.com:thibautguedou3/quasar-typescript-extension.git
```

- Then invoke the extension in your quasar project:

```bash
quasar ext invoke cood-typescript-ext
```

# Use

- Add `lang="ts"` to the script tag in a `.vue` file and change the export default:

```ts
<script lang="ts">
import Vue from "vue";

interface IData {
  message: string;
}

export default Vue.extend({
  name: "PageIndex",
  data(): IData {
    return {
      message: "Hello"
    };
  }
});
</script>
```

- Then run:

```bash
quasar dev
```

- It should compile with no error

# Uninstall

```bash
quasar ext remove cood-typescript-ext
```

# Info

The typescript errors in `.vue` files will only appear in vetur and during the webpack compilation. You will not see them when running the `tsc` command

# Donate

If you appreciate the work that went into this App Extension, please consider [donating to Quasar](https://donate.quasar.dev).
