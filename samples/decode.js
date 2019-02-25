function decode(lzma, inputData, rawData) {
  const _lzma = new lzma.LZMA()
  const _unpackSize = _lzma.unpackSize(inputData)
  console.log('unpackSize:', _unpackSize)

  const t1 = performance.now()
  const decodedData = _lzma.decode(inputData)
  const t2 = performance.now()
  console.log(`[JS]Decode time: ${(t2 - t1).toFixed(2)}ms`)
  verify(decodedData, rawData)
  // const decoder =  new TextDecoder()
  // const text = decoder.decode(decodedData)
  // console.log(text)
}

const msg =
  'Verification failed, decoded data does not matched with expected data'

function verify(data, expected) {
  if (data.length !== expected.length) {
    console.log(data, expected)
    throw msg
  }
  for (let i = 0; i < expected.length; i++) {
    if (data[i] !== expected[i]) {
      console.log(data, expected)
      throw msg
    }
  }
  return true
}

function copyData(target, source, offset = 0) {
  let j = 0
  for (let i = offset; i < offset + source.length; i++) {
    target[i] = source[j++]
  }
}

var module = {
  exports: decode,
}
