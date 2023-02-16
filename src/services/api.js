export const getSynonymsData = (prompt) => {
  return fetch('/api/synonyms', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ prompt })
  }).then((response) => response.json())
}

export const getAntonymsData = (prompt) => {
  return fetch('/api/antonyms', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ prompt })
  }).then((response) => response.json())
}

export const getDefinitionsData = (prompt) => {
  return fetch('/api/definition', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ prompt })
  }).then((response) => response.json())
}
