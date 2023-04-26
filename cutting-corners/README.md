# Cutting Corners (with borders)

## Description

Use clip path to create a shape, the trick being how to add the borders.

## About

- The cut corners are created using clip path.
- The border is added by having an outer box which has a background set to the color we want for the borders.
- We then add a pseudo element which is slightly smaller and apply the same clip-path with adjustments to take into consideration the smaller size:

## Sources

- Inspired by a [Kevin Powell video](https://www.youtube.com/watch?v=aW6qEAQSctY)
- [Demo](https://codepen.io/cbolson/pen/wvYdQaQ?editors=1100)