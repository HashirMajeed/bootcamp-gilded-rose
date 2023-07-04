import { Item, GildedRose } from '@/gilded-rose';

describe('Gilded Rose', () => {
  it('should foo', () => {
    const gildedRose = new GildedRose([new Item('foo', 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('foo');
  });
});

describe('Gilded Rose', () => {
  it('quality degrades faster after sell date', () => {
    const gildedRose = new GildedRose([new Item('foo', 2, 10)]);
    gildedRose.updateQuality();
    gildedRose.updateQuality();
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(6);
  });
});
describe('Gilded Rose',() =>{
  it('quality should be positive', () => {
    const gildedRose = new GildedRose([new Item('foo', 0,0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  });
});

describe('Gilded Rose',() =>{
  it('Brie quality should only increase', () => {
    const gildedRose = new GildedRose([new Item('Aged Brie', 5,6)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(7);
  });
});

describe('Gilded Rose',() =>{
  it('Quality should not exceed 50', () => {
    const gildedRose = new GildedRose([new Item('Aged Brie',0,50), new Item('Backstage passes to a TAFKAL80ETC concert',0,50), new Item('Backstage passes to a TAFKAL80ETC concert',0,49), new Item('Backstage passes to a TAFKAL80ETC concert',0,48)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(50);
    expect(items[1].quality).toBe(0);
    expect(items[2].quality).toBe(0);
    expect(items[3].quality).toBe(0);
  });
});

describe('Gilded Rose',() =>{
  it('Backstage passes quality increment rules', () => {
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert',10,0),new Item('Backstage passes to a TAFKAL80ETC concert',5,0),new Item('Backstage passes to a TAFKAL80ETC concert',0,5)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(2);
    expect(items[1].quality).toBe(3);
    expect(items[2].quality).toBe(0);
  });
});

describe('Gilded Rose',() =>{
  it('Sulfuras has const quality', () => {
    const gildedRose = new GildedRose([new Item('Sulfuras',5,80)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(80);

  });
});

