export default function() {
    this.transition(
      this.fromRoute('home'),
      this.toRoute('projects'),
      this.use('toLeft'),
      this.reverse('toRight')
    );

    this.transition(
      this.fromRoute('projects'),
      this.toRoute('resume'),
      this.use('toLeft'),
      this.reverse('toRight')
    );

    this.transition(
      this.fromRoute('home'),
      this.toRoute('resume'),
      this.use('toLeft'),
      this.reverse('toRight')
    );

    this.transition(
      this.childOf('#explode-project'),
      this.use('explode', {
        'pickOld': '.title',
        use: ['toUp', { duration: 500 }],
      }, {
        'pickNew': '.title',
        use: ['toDown', { duration: 500 }],
      }, {
        'pickOld': '.body',
        use: ['toDown', { duration: 500 }],
      }, {
        'pickNew': '.body',
        use: ['toUp', { duration: 500 }],
      }),
    );
}
