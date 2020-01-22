/* eslint-disable eqeqeq */
import { Platform, PixelRatio, Dimensions } from 'react-native'

export const isiOS = Platform.OS === 'ios'
export const isAndroid = Platform.OS !== 'ios'
export const isRetina = PixelRatio.get() >= 2

export const isIPhoneXSize = (dim) => (
    dim.height == 812 || dim.width == 812
)

export const isIPhoneXrSize = (dim) => (
    dim.height == 896 || dim.width == 896
)

export const isIphoneX = () => {
    const dim = Dimensions.get('window')
    return (
        isiOS
        && (
            isIPhoneXSize(dim)
            || isIPhoneXrSize(dim)
        )
    )
}

export const getStatusBarHeight = () => {
    if (isiOS) {
        if (isIphoneX()) {
            return 44
        }
        return 20
    }
    return 0
}

export const getNavbarHeight = () => {
    if (isiOS) {
        return 44
    }
    return 56
}

export const getHeaderHeight = () => (
    getStatusBarHeight() + getNavbarHeight()
)


export const getHeight = () => (
    Dimensions.get('window').height
)

export const getWidth = () => (
    Dimensions.get('window').width
)
