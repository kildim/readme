const MAX_TAGS_COUNT = 8;

export class Tag extends Set<string> {
  add(value: string){
    return this.size === MAX_TAGS_COUNT ? this : super.add(value)
  }
}
