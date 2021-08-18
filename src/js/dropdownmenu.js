   $(document).ready(function () {
            $(".select__header").click(function () {
                $(this).parent().toggleClass("active");
            })

            $(".select-list select-list__item").click(function () {
                var currentele = $(this).html();
                $(".select__header select__item").html(currentele);
                $(this).parents(".select").removeClass("active");
            })
        });