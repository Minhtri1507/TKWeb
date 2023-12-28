

//GO TO TOP  & SIGN_IN
$(document).ready(function () {

    $("#gototop").hide()

    $(window).scroll(function () {

        if ($(this).scrollTop() > 0)
            $("#gototop").fadeIn("slow")
        else
            $("#gototop").fadeOut("slow")

    })
    $("#gototop").click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 1000)
    })





    $("#sign-in").click(function () {
        $(".sign-in-box").removeClass("hide");
        $("#overplay").removeClass("hide");
        $(".sign-in-box").addClass("show");
        $("#overplay").addClass("show");
        $("#gototop").addClass("hide")
    })

    $("#overplay").click(function () {
        $(".sign-in-box").removeClass("show");
        $("#overplay").removeClass("show");
        $(".sign-in-box").addClass("hide");
        $("#overplay").addClass("hide");
        $("#gototop").addClass("show");
    })

    $("#delete").click(function () {
        $(".sign-in-box").removeClass("show");
        $("#overplay").removeClass("show");
        $("#gototop").removeClass("hide");
        $("#overplay").addClass("hide");
        $("#gototop").addClass("show");
    })

})

//index 2

$(document).ready(function () {

    $(".tab-content.first>div").hide()
    $(".tab-content.first>div:first").show()

    $("ul.tab.first a").click(function () {
        event.preventDefault()
        $("ul.tab.first a").removeClass("active");
        $(this).addClass("active");

        var tab = $(this).attr("href")
        $(".tab-content.first> div").hide()
        $(tab).show()
    })
})


$(document).ready(function () {

    $(".tab-content.second>div").hide()
    $(".tab-content.second>div:first").show()

    $("ul.tab.second a").click(function () {
        event.preventDefault()
        $("ul.tab.second a").removeClass("active");
        $(this).addClass("active");

        var tab2 = $(this).attr("href")
        $(".tab-content.second> div").hide()
        $(tab2).show()
    })
})

// Tìm kiếm
let jobs = ['Kinh tế', 'Công nghệ', 'Kỹ thuật', 'Xây dựng', 'Du lịch', 'Ngôn ngữ', 'Thời trang', 'Y tế', 'Ngân hàng'];
let places = ['TP.Hồ Chí Minh', 'Hà Nội', 'Hải Phòng', 'Đà Nẵng', 'Huế', 'Cần Thơ']
let salaries = ['Dưới 5 triệu', '5 - 10 triệu', '10 - 15 triệu', '15-20 triệu', '20-30 triệu', 'trên 30 triệu']
let languages = ['Tiếng Anh', 'Tiếng Nhật', 'Tiếng Trung', 'Tiếng Hàn', "Tiếng Lòng"]
let levels = ['Cao Học', 'Đại học', 'Cao Đẳng', 'Trung Cấp', 'Trung Học', 'Chứng Chỉ', 'Lao Động Phổ Thông']
let exps = ['Chưa có', 'Dưới 1 năm', '1 năm', '2 năm', '3 năm', '4 năm', '5 năm', 'Trên 5 năm']
$(document).ready(function () {
    //search job
    $("#jobId").keyup(function () {
        let txt = $(this).val();
        let h = '';
        for (let c of jobs)
            if (c.toLowerCase().indexOf(txt.toLowerCase()) >= 0)
                h += `<li><a href="javacript:;" >${c}</a></li>`;

        if (h !== '') {
            $("#suggest.job").html(h);
            $("#suggest.job").show("slow");
        }
    })
    $("#suggest.job").on("click", "a", function () {
        let txt = $(this).text();
        $("#jobId").val(txt);
        $("#suggest.job").hide("slow");
    })


    //search place
    $("#placeId").keyup(function () {
        let txt = $(this).val();
        let h = '';
        for (let c of places)
            if (c.toLowerCase().indexOf(txt.toLowerCase()) >= 0)
                h += `<li><a href="javacript:;" >${c}</a></li>`;

        if (h !== '') {
            $("#suggest.place").html(h);
            $("#suggest.place").show("slow");
        }
    })
    $("#suggest.place").on("click", "a", function () {
        let txt = $(this).text();
        $("#placeId").val(txt);
        $("#suggest.place").hide("slow");

    })


    //search salary
    $("#salaryId").keyup(function () {
        let txt = $(this).val();
        let h = '';
        for (let c of salaries)
            if (c.toLowerCase().indexOf(txt.toLowerCase()) >= 0)
                h += `<li><a href="javacript:;" >${c}</a></li>`;

        if (h !== '') {
            $("#suggest.salary").html(h);
            $("#suggest.salary").show("slow");
        }
    })
    $("#suggest.salary").on("click", "a", function () {
        let txt = $(this).text();
        $("#salaryId").val(txt);
        $("#suggest.salary").hide("slow");

    })
    // $("#salaryId").click( function () {
    //     let h = '';
    //     for (let c of salaries)
    //         h += `<li><a href="javacript:;" >${c}</a></li>`;
    // })

    //language
    $("#languageId").keyup(function () {
        let txt = $(this).val();
        let h = '';
        for (let c of languages)
            if (c.toLowerCase().indexOf(txt.toLowerCase()) >= 0)
                h += `<li><a href="javacript:;" >${c}</a></li>`;

        if (h !== '') {
            $("#suggest.language").html(h);
            $("#suggest.language").show("slow");
        }
    })
    $("#suggest.language").on("click", "a", function () {
        let txt = $(this).text();
        $("#languageId").val(txt);
        $("#suggest.language").hide("slow");
    })


    //level
    $("#levelId").keyup(function () {
        let txt = $(this).val();
        let h = '';
        for (let c of levels)
            if (c.toLowerCase().indexOf(txt.toLowerCase()) >= 0)
                h += `<li><a href="javacript:;" >${c}</a></li>`;

        if (h !== '') {
            $("#suggest.level").html(h);
            $("#suggest.level").show("slow");
        }
    })
    $("#suggest.level").on("click", "a", function () {
        let txt = $(this).text();
        $("#levelId").val(txt);
        $("#suggest.level").hide("slow");
    })

    //exp
    $("#expId").keyup(function () {
        let txt = $(this).val();
        let h = '';
        for (let c of exps)
            if (c.toLowerCase().indexOf(txt.toLowerCase()) >= 0)
                h += `<li><a href="javacript:;" >${c}</a></li>`;

        if (h !== '') {
            $("#suggest.exp").html(h);
            $("#suggest.exp").show("slow");
        }
    })
    $("#suggest.exp").on("click", "a", function () {
        let txt = $(this).text();
        $("#expId").val(txt);
        $("#suggest.exp").hide("slow");
    })

    
})


// ad favorite

$(document).ready(function(){

    $(".like").click(function () {
        if($(this).hasClass("addLike"))
            $(this).removeClass("addLike");
        else
            $(this).addClass("addLike");
    });
})


