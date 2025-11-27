import postcssImport from "postcss-import";
import postcssUrl from "postcss-url";
import postcssNesting from "postcss-nesting";
import postcssCustomMedia from "postcss-custom-media";
import postcssPresetEnv from "postcss-preset-env";

export default {
  plugins: [
    postcssImport(),
    postcssUrl(),
    postcssNesting(),
    postcssCustomMedia(),
    postcssPresetEnv(),
  ],
};
