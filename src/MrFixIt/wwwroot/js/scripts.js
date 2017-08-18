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
});