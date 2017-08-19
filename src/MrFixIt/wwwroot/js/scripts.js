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
                $(`#job-${jobId}-completion`).html(`<div class="chip">Completed<i class="material-icons">check</i></div>`);
                $(`#job-${jobId}-activity`).html("");
                $(`#active-chip-${jobId}`).hide();
                $(`.mark-active-${jobId}`).hide();
            } 
        })
    });

    $(".mark-active").click(function () {
        $(this).hide();
        const jobId = $(this).val();
        console.log(jobId);
        $.ajax({
            url: "Workers/MarkJobActive",
            type: "POST",
            dataType: 'html',
            data: { jobId },
            success: result => {
                $(`#job-${jobId}-activity`).html(`<div class="chip">Active</div>`);
            }
        });
    });


});