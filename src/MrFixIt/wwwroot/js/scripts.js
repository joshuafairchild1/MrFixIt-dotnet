$(() => {
    $(".claim-job-form").submit(event => {
        event.preventDefault();
        $.ajax({
            url: '@Url.Action("Create")',
            type: 'POST',
            dataType: 'json',
            data: $(this).serialize()
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