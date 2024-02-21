// const APP_Path = 'imdb';

// export const routePath = {
//     home         :`${APP_Path}`,
//     categories   :`${APP_Path}/categories`,
//     invalid      :`${APP_Path}/*`
// }


const APP_PATH = 'imdb';

export const routePath = {
    home        : `/${APP_PATH}/`,
    categories  : `/${APP_PATH}/categories`,
    movie       : `${APP_PATH}/movie`,
    movies      : `${APP_PATH}/movies`,
    topRated    : `${APP_PATH}/movies`,
    upcoming    : `${APP_PATH}/movies`,
    invalid     : `${APP_PATH}/*`
}