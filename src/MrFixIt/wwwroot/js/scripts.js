$(() => {
    $(".claim-job").click(function() {
        const jobId = $(this).val();
        $(this).hide();
        $.ajax({
            url: 'Jobs/Claim',
            type: 'POST',
            dataType: 'html',
            data: { jobId },
            success: function () {
                $(".claimed").html("This job has been claimed")
            }
        });
    });

    $(".mark-complete").click(function () {
        const jobId = $(this).val();
        $.ajax({
            url: 'Workers/MarkJobComplete',
            type: 'POST',
            dataType: 'html',
            data: { jobId },
            success: result => {
                $(`#job-${jobId}-completion`).html(result);
                $(`#job-${jobId}-activity`).html("");
                $(`#job-${jobId}-activity-static`).html("");
                $(".mark-active").hide();
            } 
        })
    });

    $(".mark-active").click(function () {
        $(this).hide();
        const jobId = $(this).val();
        $.ajax({
            url: "Workers/MarkJobActive",
            type: "POST",
            dataType: 'html',
            data: { jobId },
            success: result => {
                $(`#job-${jobId}-activity`).html(result);
            }
        });
    });


});