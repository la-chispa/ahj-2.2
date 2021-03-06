/* eslint-disable import/no-unresolved */
import renderTable from './render';
import db from './data';
import parse from './parse';
import selectCol from './select';

renderTable(parse(db));
selectCol();
