import {
    useSelector as useReduxSelector,
    TypedUseSelectorHook
} from 'react-redux'
import { RootState } from './store'

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector

// 对useSelector进行特殊处理 防止组件与RootState深度绑定 将组件从store中剥离
