import * as Auth from '~/services/auth'

export const state = () => {

}

export const actions = {
    async facebookGetRedirectResult({
        commit, dispatch
    }) {
        const res = await Auth.facebookGetRedirectResult()
        return res
        // console.log(res)
        // const fbId = res.additionalUserInfo.profile.id
        // return fbId
    }
}