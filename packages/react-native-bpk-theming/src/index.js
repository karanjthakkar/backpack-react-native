/*
 * Backpack - Skyscanner's Design System
 *
 * Copyright 2016-2019 Skyscanner Ltd
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* @flow */

// This is based on https://github.com/cssinjs/theming/blob/a2e1f4bdb1dc9c8ac705ee9987c86125c34ed485/src/index.js
// But with our custom `createWithTheme` function.

import { createContext } from 'react';
import { createTheming } from 'theming';

import createWithTheme from './create-with-theme';

const ThemeContext = createContext();

const { ThemeProvider: BpkThemeProvider } = createTheming(ThemeContext);
const withTheme = createWithTheme(ThemeContext);

export { BpkThemeProvider, withTheme };
