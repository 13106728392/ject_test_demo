import { fetchData , fetchTwoData } from './src/fetchData.js'



test('fetchData 测试', () => {
    fetchData((data) => {
        expect(data).toEqual({
            success: true
        })
        done()  // 表示回调结束
    })
})


test('FetchTwoData 测试', ()=>{
    return  fetchTwoData().then((response)=>{
         expect(response.data).toEqual({
             success: true
         })
     })
})