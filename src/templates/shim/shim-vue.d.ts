declare module '*.vue' {
	import Vue from 'vue';
	export default Vue;
}

// Vue needs to be imported before adding global types
import Vue from 'vue';
<% if (prompts.i18n) { %>
import VueI18n from 'vue-i18n';
<% } else { %>
<% } %>

declare module 'vue/types/vue' {
	// Put here every Vue overload
	interface Vue {}
}
