module.exports = (controller = '') => {
    const allowedMimes = ['image/jpeg', 'image/pjpeg', 'image/png'];
    let maxFileSize = 1024 * 1024 * 2; // 1 MB
    let fields = [];
    switch (controller) {
    case 'profile-image': {
        fields = [
            {
                name: 'profileImage',
                maxCount: 1,
            },
        ];
        maxFileSize = 1024 *  100 * 2; // 100 kb
        break;
    }
    default:
        fields = [];
    }
    return {
        allowedMimes,
        maxFileSize,
        fields,
    };
};
