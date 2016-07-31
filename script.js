$(function() {
    $("#submit").on("click", function() {


        // CONTAINER PROPERTIES

        var direction = $('#direction').val();
        var justify = $('#justify').val();
        var align = $('#align').val();
        var align_content = $('#align_content').val();

        // Reverse
        if ($('#reverse').is(":checked")) {
            $(".container").css("flex-direction", direction + "-reverse");
        } else {
            $(".container").css("flex-direction", direction);
        }

        // Wrap
        if ($('#wrap').is(":checked")) {
            $(".container").css("flex-wrap", "wrap");
        } else {
            $(".container").css("flex-wrap", "nowrap");
        }
        // Fixed Height
        if ($('#container_height').is(":checked")) {
            $(".container").css("height", "170vh");
        } else {
            $(".container").css("height", "auto");
        }
        // Fixed width
        if ($('#container_width').is(":checked")) {
            $(".container").css("width", "300px");
        } else {
            $(".container").css("width", "auto");
        }
        // Main alignment
        $(".container").css("justify-content", justify);

        // Cross alignment
        $(".container").css("align-items", align);

        // Multiple Line alignment
        $(".container").css("align-content", align_content);


        // BOX PROPERTIES

        if ($('#margin').is(":checked")) {
            $(".box").css("margin", "5px");
        } else {
            $(".box").css("margin", "0");
        }
        // Fixed Height
        if ($('#box_height').is(":checked")) {
            $(".box").css("height", "300px");
        } else {
            $(".box").css("height", "auto");
        }

        // Fixed width
        if ($('#box_width').is(":checked")) {
            console.log("checked");
            $(".box").css("width", "33.333333333%");
        } else {
            $(".box").css("width", "auto");
            console.log("not checked");
        }

        // Fill space
        if ($('#fill').is(":checked")) {
            for (var i = 1; i <= 10; i++) {
                var flex = $("#proportion" + i).val("1");
            }
            $('#fill').prop("checked", false);
        }

        // Reset proportion
        if ($('#reset_proportion').is(":checked")) {
            for (var i = 1; i <= 10; i++) {
                var flex = $("#proportion" + i).val("0");
            }
            $('#reset_proportion').prop("checked", false);
        }


        for (var i = 1; i <= 10; i++) {
            var order = $("#box" + i).val();
            var box_align = $("#align" + i).val();
            var flex = $("#proportion" + i).val();

            // Order
            $(".box" + i).css("order", order);
            // Align
            $(".box" + i).css("align-self", box_align);
            // Proportion
            if (flex > 0) {
                $(".box" + i).css("flex", flex);
            } else {
                $(".box" + i).css("flex", "none");
            }

        }
    });
});
