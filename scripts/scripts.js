function isotope_init() {
	$('.grid').isotope({
		itemSelector: '.grid-item',
		layoutMode: 'fitRows'
	});

	$(".filter-button-group").on("click", "button", function () {
		$(".is-checked")[0].classList.remove("is-checked");
		$(this)[0].classList.add("is-checked");
		var filterValue = $(this).attr("data-filter");
		$('.grid').isotope({ filter: filterValue });
	});
}

$(document).ready(function () {
	isotope_init();	
})
