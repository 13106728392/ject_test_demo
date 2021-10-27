

import {baojian1,baojian2} from './src/dabaojian.js'
import {xiyu1} from './src/xiyu.js'

test('保健1 300元',()=>{
    expect(baojian1(300)).toBe('至尊享受')
})

test('保健2  2000元',()=>{
    expect(baojian2(2000)).toBe('双人服务')
})


test('洗浴1  500元',()=>{
    expect(xiyu1(500)).toBe('全套')
})
