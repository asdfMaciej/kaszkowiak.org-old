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

Vue.component("post", {
	template: "#post-template",
	props: ['post'],
	methods: {
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

var lorem = "lorem ipsum".repeat(100);
var app = new Vue({
	el: '#application',
	data: {
		currentPage: "blog",
		pages: ["home", "projects", "blog", "music", "contact"],
		albums: [
			{index: 0, artist: "Tuzza", name: "Fino alla fine", genre: "Rap", review: "lorem ipsum".repeat(100)},
			{index: 1, artist: "Otsochodzi", name: "Miłość", genre: "Rap", review: "lorem ipsum".repeat(100)},
			{index: 2, artist: "Bedoes", name: "Squadshits (Bootleg)", genre: "Rap", review: "lorem ipsum".repeat(100)},
			{index: 3, artist: "Sokół", name: "Wojtek Sokół", genre: "Rap", review: "lorem ipsum".repeat(100)},
			{index: 4, artist: "Abradab", name: "Emisja Spalin", genre: "Rap", review: "lorem ipsum".repeat(100)}
		],
		posts: [
			{index: 0, author: "Maciej Kaszkowiak", title: "creating a website with Vue", date: "2019-02-27", text: "Aaaaa<br>aaaaaaaaaa<br><b>testtesttest</b>"+lorem},
			{index: 1, author: "Maciej Kaszkowiak", title: "longer title that allows me to tell you about scraping Facebook messages bla bla", date: "2019-02-25", text: "Aaaaa<br>aaaaaaaaaa<br><b>testtesttest</b>"+lorem}
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