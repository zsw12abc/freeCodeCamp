/**
 * Created by zswki on 2017/5/25.
 */

function bouncer(arr) {
    // Don't show a false ID to this bouncer.
    return arr.filter(Boolean);
}

bouncer([7, "ate", "", false, 9]);
