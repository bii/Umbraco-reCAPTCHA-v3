let siteVerify = (response, action) => {
    fetch(`/umbraco/api/recaptcha/siteverify?recaptchaResponse=${response}&recaptchaAction=${action}`, {
        headers: {"Content-Type": "application/json; charset=utf-8"},
        method: 'POST'
    })
        .then(response => response.json())
        .then(data => console.log(data))
};

export {siteVerify};