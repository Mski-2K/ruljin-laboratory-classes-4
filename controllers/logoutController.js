const getLogoutView = (req, res) => {
    res.render('logout');
};

const killApplication = (req, res) => {
    getProcessLog();
    process.exit(0);
};

module.exports = {
    getLogoutView,
    killApplication
};
