export const tasks = `
function sort() {
  const a = [1, 2, 4, 7, 11, 19]
  const b = [2, 7, 19, 28, 31]

  function findEqualElements(arr1, arr2) {
    const map = arr1.reduce((acc, item) => {
      acc[item] = (acc[item] || 0) + 1

      return acc
    }, {})

    return arr2.reduce((acc, item) => {
      if (map[item]) {
        map[item] -= 1
        acc.push(item)
      }

      return acc
    }, [])
  }

  console.log(findEqualElements(a, b))
}

/*
 Найти регион по заданному id
*/
function regions() {
  const model = {}

  model.data = [
    {
      id: 0,
      name: "Все регионы",
    },
    {
      id: 67,
      name: "Алтайский край",
      chld: [
        {
          id: 32,
          name: "Алейск",
        },
        {
          id: 89,
          name: "Барнаул",
        },
      ],
    },
  ]

  model.getNameById = function (id) {
    const stack = [...this.data]

    while (stack.length > 0) {
      const region = stack.shift()

      if (region.id === id) {
        return region.name
      }

      if (region.chld) {
        stack.unshift(...region.chld)
      }
    }
  }

  console.assert(model.getNameById(89) === "Барнаул")
  console.assert(model.getNameById(0) === "Все регионы")
  console.assert(model.getNameById(67) === "Алтайский край")
}

function flow() {
  const add = (x) => (y) => y + x
  const multiple = (x) => (y) => y * x

  function main(...func) {
    return (x) => func.reduce((acc, fn) => fn(acc), x)
  }

  console.assert(main(add(2), multiple(3))(4) === 18)
}

function chain() {
  function main(fnList, input, timeout) {
    function sleep(fn, x) {
      return new Promise((res) => {
        setTimeout(() => {
          res()
        }, timeout)
      })
    }

    fnList.reduce((acc, fn) => {
      return acc.then(async (x) => {
        await sleep()
        return fn(x)
      })
    }, Promise.resolve(input))
  }

  main(
    [
      function (prev) {
        console.log(prev)
        return prev + 1
      },
      function (prev) {
        console.log(prev)
      },
    ],
    9,
    1000,
  )
}

/*
 Ретрай запросов n раз
*/
function request() {
  function req() {
    return new Promise((res, rej) => {
      setTimeout(() => {
        rej(JSON.stringify({ a: 1 }))
      }, 300)
    })
  }

  async function get(url) {
    let retryCount = 5

    while (retryCount > 0) {
      try {
        const data = await req()

        return data
      } catch (error) {
        retryCount -= 1
      }
    }

    return "Заданный URL недоступен"
  }

  get("")
    .then((res) => console.log(res))
    .catch((err) => console.error(err))
}

function rle() {
  function main() {
    const str = "AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB"

    const { rs } = str.split("").reduce(
      (acc, char, index) => {
        const nextChar = str[index + 1]

        acc.counter += 1

        if (nextChar !== char) {
          acc.rs += acc.counter > 1 ? \`$\{char}$\{acc.counter}\` : char
          acc.counter = 0
        }

        return acc
      },
      { counter: 0, rs: "" },
    )

    return rs
  }

  console.assert(main() === "A4B3C2XYZD4E3F3A6B28")
}

function math() {
   function createNumber(num) {
    return (op) => op ? op(num) : num
  }

  function createOperation(symb) {
    return (x) => {
      return (y) => {
        if (symb === '+') {
          return x + y
        }

        if (symb === '-') {
          return y - x
        }
      }
    }
  }

  const five = createNumber(5)
  const one = createNumber(1)
  const seven = createNumber(7)
  const two = createNumber(2)
  const add = createOperation('+')
  const subtract = createOperation('-')
}

const ar1 = [1, 2, 3, 4, 3, 2, 1];
const ar2 = [1, 100, 50, -51, 1, 1];
const ar3 = [0, 8];
const ar4 = [20, 10, -80, 10, 10, 15, 35];

function findEvenIndex(ar = []) {
  function getLeftSumFromIndex(index) {
    let s = 0;

    for (let i = index; i >= 0; i--) {
      s += ar[i];
    }

    return s;
  }

  function getRightSumFromIndex(index) {
    let s = 0;

    for (let i = index; i < ar.length; i++) {
      s += ar[i];
    }

    return s;
  }

  for (let i = 0; i < ar.length; i++) {
    if (getLeftSumFromIndex(i - 1) === getRightSumFromIndex(i + 1)) {
      return i;
    }
  }

  return -1;
}
`;
