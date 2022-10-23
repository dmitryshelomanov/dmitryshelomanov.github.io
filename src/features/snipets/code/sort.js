export const sort = `
function bableSortFor() {
  const data = [1, 4, 5, 7, 3, 9, 8]
  let c = 0

  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < (data.length - 1) - i; j++) {
      c += 1
      if (data[j] > data[j + 1]) {
        const tmp = data[j]

        data[j] = data[j + 1]
        data[j + 1] = tmp
      }
    }
  }

  console.log('bableSortFor', data, c)
}

bableSortFor()

function bableSortWhile() {
  const data = [1, 4, 5, 7, 3, 9, 8]
  let swipped = true
  let c = 0
  let i = 0

  while (swipped) {
    swipped = false

    for (let j = 0; j < (data.length - 1) - i; j++) {
      c += 1

      if (data[j] > data[j + 1]) {
        const tmp = data[j]

        data[j] = data[j + 1]
        data[j + 1] = tmp

        swipped = true
      }
    }

    i += 1
  }

  console.log('bableSortWhile', data, c)
}

bableSortWhile()


function insertedSortFor() {
  const data = [1, 4, 5, 7, 3, 9, 8]
  let c = 0

  for (let i = 0; i < data.length; i++) {
    for (let j = i; j > 0; j--) {
      c += 1

      if (data[j] < data[j - 1]) {
        const tmp = data[j]

        data[j] = data[j - 1]
        data[j - 1] = tmp
      }
    }
  }

  console.log('insertedSortFor', data, c)
}

insertedSortFor()

function insertedSortWhile() {
  const data = [1, 4, 5, 7, 3, 9, 8]
  let c = 0

  for (let i = 0; i < data.length; i++) {
    let swipped = true
    let j = i

    while (swipped) {
      swipped = false
      c += 1

      if (data[j] < data[j - 1]) {
        const tmp = data[j]

        data[j] = data[j - 1]
        data[j - 1] = tmp
        swipped = true
      }

      j -= 1
    }
  }

  console.log('insertedSortWhile', data, c)
}

insertedSortWhile()

function evenOddSort() {
  const data = [1, 4, 5, 7, 3, 9, 8]
  const isOdd = (pos) => pos % 2 !== 0
  let c = 0

  for (let i = 0; i < data.length; i++) {
    for (let j = isOdd(i) ? 1 : 0; j < data.length - 1; j += 2) {
      c += 1

      if (data[j] > data[j + 1]) {
        const tmp = data[j]

        data[j] = data[j + 1]
        data[j + 1] = tmp
      }
    }
  }

  console.log('evenOddSort', data, c)
}

evenOddSort()
`;
