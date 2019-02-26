Vue.component("switch-section", {
	template: "#switch-section-template",
	props: ['section'],
	methods: {
	}
});

Vue.component("album", {
	template: "#album-template",
	props: ['album'],
	methods: {
		src() {
			return "cover-art/"+this.album.index+".jpg";
		},
		onClick() {
			this.$emit('use-album', this.album.index);
		}
	}
});

Vue.component("album-review", {
	template: "#album-review-template",
	props: ['album'],
	methods: {
		src() {
			return "cover-art/"+this.album.index+".jpg";
		}
	}
});

Vue.component("v-link", {
	template: "#v-link-template",
	props: ["href"],
	methods: {
		go (event) {
			event.preventDefault();
			this.$root.currentPage = this.href;
			window.history.pushState(null, this.href, "/"+this.href);
		}
	}
});

var app = new Vue({
	el: '#application',
	data: {
		currentPage: "home",
		pages: ["home", "projects", "blog", "music", "contact"],
		albums: [
			{index: 0, artist: "Tuzza", name: "Fino alla fine", genre: "Rap", review: "lorem ipsum".repeat(100)},
			{index: 1, artist: "Otsochodzi", name: "Miłość", genre: "Rap", review: "lorem ipsum".repeat(100)},
			{index: 2, artist: "Bedoes", name: "Squadshits (Bootleg)", genre: "Rap", review: "lorem ipsum".repeat(100)},
			{index: 3, artist: "Sokół", name: "Wojtek Sokół", genre: "Rap", review: "lorem ipsum".repeat(100)},
			{index: 4, artist: "Abradab", name: "Emisja Spalin", genre: "Rap", review: "lorem ipsum".repeat(100)}
		],
		albumIndex: 0
	},
	methods: {
		usePage(p) {
			this.currentPage = p;
		},
		useAlbum(i) {
			this.albumIndex = i;
		}
	},
	computed: {
	},

	mounted() {}
});

window.addEventListener('popstate', () => {
	app.currentPage = window.location.pathname;
});