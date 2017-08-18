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
            //async: false,
            success: function(result) {
                console.log(result);
                $(`#job-${jobId}`).html(result);
            }
        })
    });
});