export function getBrowser(): any{
    let isChrome = navigator.userAgent.indexOf('Chrome') !== -1;
    if ( navigator.userAgent.indexOf('Edg') !== -1){
      isChrome = false;
    }
    return isChrome;
}