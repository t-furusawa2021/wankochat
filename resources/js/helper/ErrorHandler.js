export const ErrorHandler = (err) => {
    switch (err.response.status) {
        case 422:
            // バリデーションエラー
            alert(err.response.data.error);
            break;
        case 401:
            // ログインエラー
            alert('再ログインしてください。');
            localStorage.clear();
            location.reload();
            break;
        case 404:
            alert('存在しないリンクへのアクセスです。');
            break;
        case 500:
            // サーバーエラー
            alert(err.response.data.message);
            break;
        default:
            alert(err.response.data.message);
    }
}
