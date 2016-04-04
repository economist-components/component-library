import 'babel-polyfill';
import React from 'react';
import Library from './';
import Component from './library-component.js';

import NavigationPackage from '@economist/component-navigation/package.json';
import NavigationExample from '@economist/component-navigation/lib/example.js';

import IconPackage from '@economist/component-icon/package.json';
import IconExample from '@economist/component-icon/lib/example.js';

import PalettePackage from '@economist/component-palette/package.json';
import PaletteExample from '@economist/component-palette/example.js';

import GridPackage from '@economist/component-grid/package.json';
import GridExample from '@economist/component-grid/example.js';

import TeaserPackage from '@economist/component-teaser/package.json';
import TeaserExample from '@economist/component-teaser/example.js';

import TeaserListPackage from '@economist/component-teaser-list/package.json';
import TeaserListExample from '@economist/component-teaser-list/example.js';

import FooterPackage from '@economist/component-footer/package.json';
import FooterExample from '@economist/component-footer/example.js';

import CookieMessagePackage from '@economist/component-cookie-message/package.json';
import CookieMessageExample from '@economist/component-cookie-message/example.js';

import AdPanelPackage from '@economist/component-ad-panel/package.json';
import AdPanelExample from '@economist/component-ad-panel/example.js';

import HeaderPackage from '@economist/component-header/package.json';
import HeaderExample from '@economist/component-header/lib/example.js';

import SubscribeMessagePackage from '@economist/component-subscribe-message/package.json';
import SubscribeMessageExample from '@economist/component-subscribe-message/lib/example.js';

import LinkButtonPackage from '@economist/component-link-button/package.json';
import LinkButtonExample from '@economist/component-link-button/lib/example.js';

import BalloonPackage from '@economist/component-balloon/package.json';
import BalloonExample from '@economist/component-balloon/lib/example.js';

import SectionsCardPackage from '@economist/component-sections-card/package.json';
import SectionsCardExample from '@economist/component-sections-card/lib/example.js';


export default (
  <Library>
    <Component metadata={NavigationPackage}>
      {NavigationExample}
    </Component>

    <Component metadata={PalettePackage}>
      {PaletteExample}
    </Component>

    <Component metadata={IconPackage}>
      {IconExample}
    </Component>

    <Component metadata={LinkButtonPackage}>
      {LinkButtonExample}
    </Component>

    <Component metadata={BalloonPackage}>
      {BalloonExample}
    </Component>

    <Component metadata={GridPackage}>
      {GridExample}
    </Component>

    <Component metadata={TeaserPackage}>
      {TeaserExample}
    </Component>

    <Component metadata={TeaserListPackage}>
      {TeaserListExample}
    </Component>

    <Component metadata={FooterPackage}>
      {FooterExample}
    </Component>

    <Component metadata={SectionsCardPackage}>
      {SectionsCardExample}
    </Component>

    <Component metadata={CookieMessagePackage}>
      {CookieMessageExample}
    </Component>

    <Component metadata={SubscribeMessagePackage}>
      {SubscribeMessageExample}
    </Component>

    <Component metadata={AdPanelPackage}>
      {AdPanelExample}
    </Component>

    <Component metadata={HeaderPackage}>
      {HeaderExample}
    </Component>
  </Library>
);
